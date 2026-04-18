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
    You are an autonomous Smart Pricing AI for parking spaces worldwide. 
    Your ultimate goal is to calculate the realistic market price for 1 hour of parking strictly in Polish Zloty (PLN).
    
    Input data:
    - GPS Coordinates: ${ctx.lat}, ${ctx.lng}
    - Current hour: ${ctx.hour}
    - Weather: ${ctx.weather}
    - Event nearby: ${ctx.isEventNearby ? 'YES' : 'NO'}

    Follow this internal reasoning process strictly:
    1. Geolocate the Coordinates and analyze the immediate surroundings.
    2. Crucial Step: Assess the availability of free place to park in the direct vicinity (within walking distance).
       - If there is abundant free parking nearby (e.g., residential neighborhoods without paid zones, rural areas, empty lots), the market value of a paid spot drops to near zero. In this case, set the base price extremely low, literally pennies (e.g., 0.10 PLN - 1.00 PLN).
       - If free parking is scarce or non-existent (e.g., city centers, paid parking zones, commercial districts), set a standard or premium base price appropriate for that specific location.
    3. Apply Dynamic Market Adjustments: Adjust your estimated base value based on current demand. Increase the price for rush hours, bad weather (people prefer driving), or nearby events.

    RETURN ONLY THE FINAL NUMBER IN PLN (e.g., 0.20 or 12.50). Do not add currency symbols, words, or markdown. Just the digits.
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
