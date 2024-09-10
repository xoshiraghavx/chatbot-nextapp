import { streamText, convertToCoreMessages } from 'ai';
import { createGoogleGenerativeAI } from '@ai-sdk/google';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY, 
});

export async function POST(req) {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash-latest'),
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}