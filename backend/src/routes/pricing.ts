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
            You are a highly precise, local parking expert and Smart Pricing AI for parking spaces worldwide.
            Your ultimate goal is to calculate the realistic market price for 1 hour of private parking strictly in Polish Zloty (PLN).
            
            Input data:
            - GPS Coordinates: ${ctx.lat}, ${ctx.lng}
            - Current hour: ${ctx.hour}
            - Weather: ${ctx.weather}
            - Event nearby: ${ctx.isEventNearby ? 'YES' : 'NO'}

            Follow this EXACT internal reasoning process before answering:
            
            STEP 1: Identify the exact street, district, and city using the GPS coordinates. 
            STEP 2: Answer this strict question internally: "Is it legally and practically possible to park for free on the street in this exact immediate vicinity?"
            STEP 3: Base Value Calculation:
               - IF YES (free public parking is easily available nearby): The market value of a paid private spot drops to almost nothing. Set the base price to literal pennies (0.50 PLN - 1.50 PLN).
               - IF NO (it is a strict paid zone, ultra-premium location like Monaco Casino / Manhattan, or free parking is literally impossible): Determine the ACTUAL, REAL-WORLD cost of 1 hour of commercial or municipal parking at this exact location. Think of the real valet/garage/meter cost in the local currency.
            STEP 4: Currency Conversion: If you found a real-world paid price in Step 3 (e.g., 15 EUR or 25 USD), convert that local currency into Polish Zloty (PLN). (e.g., 1 USD/EUR/GBP ≈ 4 to 5 PLN).
            STEP 5: Apply dynamic multipliers to the PLN value based on current demand:
               - Rush hour (07:00-09:00 or 15:00-17:00): increase by 20%
               - Rain or snow: increase by 10%
               - Event nearby (YES): increase by 50%

            RETURN ONLY THE FINAL NUMBER IN PLN (e.g., 0.50 or 145.00). Do not add currency symbols, words, or markdown. Just the digits.
        `;

        const result = await aiModel.generateContent(prompt);
        const textResponse = result.response.text();
        console.log("Gemini response:", textResponse);

        const match = textResponse.match(/[\d\.]+/);
        const suggestedPrice = match ? parseFloat(match[0]) : NaN;

        if (isNaN(suggestedPrice)) {
            console.log("Could not take out the number. Turning on fallback.");
            return res.json({ price: getFallbackPrice(ctx) });
        }
        res.json({ price: suggestedPrice });

    } catch (error) {
        console.error("Error when connecting with Gemini API:", error);
        res.json({ price: getFallbackPrice(ctx) });
    }
})

export default router;
