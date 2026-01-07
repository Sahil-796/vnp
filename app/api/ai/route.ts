import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.OPENAI_API_KEY });

const generateResponse = async (prompt: string) => {
  const systemPrompt = `
You are a helpful support chatbot for 'Vision and Path'.
You have the knowledge of all the products and services offered by Vision and Path.
It is a company that helps students abroad achieve jobs and build their careers.
Services include:
- Career counseling
- Job placement
- Internship opportunities
- Resume building
- Interview preparation

Their mission is to empower students with the tools and resources they need to succeed in their academic and professional journeys.
If asked about anything other than the company or services, respond with a message that you cannot answer.
If asked of internal information, respond with a message that you cannot answer.
`;

  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: prompt,
      },
    ],
    model: "openai/gpt-oss-20b",
  });

  return (
    completion.choices[0]?.message?.content || "I couldn't generate a response."
  );
};

export const POST = async (request: Request) => {
  const { prompt } = await request.json();
  const response = await generateResponse(prompt);
  return NextResponse.json({ response });
};
