import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { z } from "zod";
import {
    convertJsonSchemaToZod,
    RetryablePromise,
    generateContentText,
    PROMPT,
    WELCOME_MESSAGE,
} from "@/app/lib";

export function GET() {
    return new Response(WELCOME_MESSAGE, {
        headers: { 'Content-Type': 'text/plain' },
        status: 200
    });
}

export async function POST(req: NextRequest) {
    const body = await req.json();

    const requestBodySchema = z.object({
        data: z.string(),
        format: z.object({}).passthrough(),
    });

    const { data, format } = requestBodySchema.parse(body);

    const dynamicSchema = convertJsonSchemaToZod(format);
    const content = generateContentText({ data, format });

    /**
     * This function uses the RetryablePromise utility to attempt the content generation 
     * process up to three times in case of failures. It interacts with the geminiAI 
     * library to generate content based on a given prompt and schema, then parses 
     * the generated content using a dynamic schema.
     */
    const generateAndParseContent = await RetryablePromise.retry<string>(3, async (resolve, reject) => {
        try {
            const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: PROMPT,
            });

            //~~ Generate content using the generative model
            const generationResult = await model.generateContent(content);
            const generationResponse = generationResult.response;

            //~~ Extract the generated text from the response
            const generatedText = generationResponse.text();

            //~~ Parse the generated text using the dynamic schema
            const parsedResult = dynamicSchema.parse(JSON.parse(generatedText || ""));

            return resolve(parsedResult)
        } catch (err) {
            reject(err)
        }
    });

    return NextResponse.json(generateAndParseContent, { status: 200 });
}