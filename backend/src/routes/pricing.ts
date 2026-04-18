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
            You are an advanced Smart Pricing algorithm for parking spaces worldwide.
            Your ultimate goal is to calculate the final price for 1 hour of parking and return it EXCLUSIVELY in Polish Zloty (PLN).
            
            Input data:
            - GPS Coordinates: ${ctx.lat}, ${ctx.lng}
            - Provided Base Price: ${ctx.standardPrice}
            - Current hour: ${ctx.hour}
            - Weather: ${ctx.weather}
            - Event nearby: ${ctx.isEventNearby ? 'YES' : 'NO'}

            Follow this internal logic strictly:
            1. Identify the city and country based on the GPS coordinates.
            2. Determine the realistic market price for 1 hour of parking in that specific city. For example, Manhattan might be 20 USD, Monaco 15 EUR, London 10 GBP, but Warsaw is around 5 PLN. 
            3. If the "Provided Base Price" (${ctx.standardPrice}) is unrealistically low for the identified global location, IGNORE IT and use your realistic local market price estimate.
            4. Convert that local price into Polish Zloty (PLN). Use approximate exchange rates (1 USD ≈ 4.0 PLN, 1 EUR ≈ 4.3 PLN, 1 GBP ≈ 5.0 PLN).
            5. Apply dynamic modifiers to the PLN value:
               - If it is rush hour (07:00-09:00 or 15:00-17:00), increase by 20%.
               - If weather is rain or snow, increase by 10%.
               - If Event nearby is YES, increase by 50%.
            
            RETURN ONLY THE FINAL NUMBER IN PLN (e.g., 85.50). Do not add any currency symbols, words, or explanations. Just the digits.
        `;

        const result = await aiModel.generateContent(prompt);
        const textResponse = result.response.text();
        console.log("🤖 Odpowiedź z Gemini:", textResponse); // <--- ZOBACZ CO ZWRACA AI

        // Używamy wyrażenia regularnego, żeby wyciągnąć same cyfry z tekstu
        // (czasami AI pisze "**15.5**" albo "15.5 PLN" pomimo próśb)
        const match = textResponse.match(/[\d\.]+/);
        const suggestedPrice = match ? parseFloat(match[0]) : NaN;

        if (isNaN(suggestedPrice)) {
            console.log("⚠️ Nie udało się wyciągnąć liczby. Włączam fallback.");
            return res.json({ price: getFallbackPrice(ctx) });
        }
        res.json({ price: suggestedPrice });

    } catch (error) {
        // Tego Ci brakowało! Teraz zobaczysz DLACZEGO to nie działa.
        console.error("🚨 Błąd połączenia z Gemini API:", error);
        res.json({ price: getFallbackPrice(ctx) });
    }
})

export default router;
