import { Router, type Request, type Response } from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');
const aiModel = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

interface SuggestionContext {
    lat: string;
    lng: string;
    standardPrice: number;
    hour: string;
    weather: 'sunny' | 'rainy' | 'snow';
    isEventNearby: boolean;
}

// Fallback function, when AI error occurs
const getFallbackPrice = (ctx: SuggestionContext): number => {
    let price = ctx.standardPrice;
    if (ctx.isEventNearby) price += 10;
    if (ctx.weather !== 'sunny') price += 2;
    return price;
};

// TO TEST:
// {
//   "lat": "50°15'32.5",
//   "lng": "19°01'41.4",
//   "standardPrice": 6,
//   "hour": "10:00",
//   "weather": "snow",
//   "isEventNearby" : false
// }
router.post('/suggestPrice', async (req: Request, res: Response) => {
    const ctx: SuggestionContext = req.body;

    try {
        if (!process.env.GEMINI_API_KEY) {
            return res.json({ price: getFallbackPrice(ctx) });
        }

        const prompt = `
            Give me ONLY A NUMBER (for example: 15.5) - suggested price for 1h of parking in Polish Zloty. Don't write anything else.
            Location: ${ctx.lat}, ${ctx.lng}
            Average price in the area: ${ctx.standardPrice} PLN
            Hour: ${ctx.hour}
            Weather: ${ctx.weather}
            Event in the area: ${ctx.isEventNearby ? 'YES' : 'NO'}
        `;

        const result = await aiModel.generateContent(prompt);
        const suggestedPrice = parseFloat(result.response.text().trim());

        if (isNaN(suggestedPrice)) {
            return res.json({ price: getFallbackPrice(ctx) });
        }
        res.json({ price: suggestedPrice });

    } catch (error) {
        res.json({ price: getFallbackPrice(ctx) });
    }
})

export default router;
