import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const { apiKey } = await request.json();

        if (!apiKey) {
            return NextResponse.json({ error: 'API Key is required' }, { status: 400 });
        }

        const envPath = path.join(process.cwd(), '.env');

        // Append or write the GEMINI_API_KEY
        if (fs.existsSync(envPath)) {
            let content = fs.readFileSync(envPath, 'utf8');
            if (content.includes('GEMINI_API_KEY=')) {
                content = content.replace(/GEMINI_API_KEY=.*/g, `GEMINI_API_KEY=${apiKey}`);
            } else {
                content += `\nGEMINI_API_KEY=${apiKey}\n`;
            }
            fs.writeFileSync(envPath, content);
        } else {
            fs.writeFileSync(envPath, `GEMINI_API_KEY=${apiKey}\n`);
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to save API key:', error);
        return NextResponse.json({ error: 'Failed to save API key' }, { status: 500 });
    }
}
