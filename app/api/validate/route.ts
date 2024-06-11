import convertJsonSchemaToZod from "@/app/lib/schemaUtils";
import { generateContentText } from "@/app/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export function GET() {
    return new Response("Hello Bro!");
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

    return NextResponse.json({ message: "Working Fine" }, { status: 200 })
}