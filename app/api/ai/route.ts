import { NextResponse } from "next/server";
import Groq from "groq-sdk";
import {
  landingPageData,
  contactPageData,
  servicesPageData,
} from "@/constants";

const groq = new Groq({ apiKey: process.env.OPENAI_API_KEY });

interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

const generateResponse = async (messages: Message[]) => {
  // Chat History: This function receives the last 5 messages (or fewer)
  // from the conversation to maintain context and provide coherent responses

  // Build services information from constants
  const servicesInfo = servicesPageData.content
    .map(
      (service, index) => `
    ${index + 1}. ${service.title}
    - Description: ${service.desc}
    - Key Benefits: ${service.details.benefits.join(", ")}
    - Process: ${service.details.process.join(" → ")}
    `,
    )
    .join("\n");

  const systemPrompt = `
You are the official AI assistant for Vision & Path, a professional career guidance and job placement platform.
Your purpose is to help users advance their careers through expert guidance, practical strategies, and clear explanations of our services.
You must behave like a knowledgeable career coach, recruiter, and advisor combined.

IMPORTANT CONTACT INFORMATION:
- Email: ${contactPageData.contactInfo[0].value}
- Address: ${contactPageData.contactInfo[1].value}
- Phone: ${contactPageData.contactInfo[2].value}
- Website: www.visionandpath.com

Core Responsibilities:

1. Provide high-quality guidance on:
   - Career direction & decision making
   - ATS optimization and Resume improvement
   - Interview preparation (behavioral, technical, HR, salary)
   - Job search strategies and networking
   - Skill development and career growth
   - Career transitions and role changes
   - Salary negotiation and offer evaluation

2. Explain Vision & Path services clearly and confidently when relevant
3. Help users choose the right service based on their needs
4. Offer actionable, structured advice (not generic motivational content)

Vision & Path Services (Official Information):
${servicesInfo}

Why Choose Us:
${landingPageData.whyChooseUs.content.map((item, i) => `${i + 1}. ${item.title}: ${item.description}`).join("\n")}

Tone & Style:
- Professional, warm, supportive
- Clear and structured
- Avoid corporate fluff and over-marketing
- Be practical and grounded
- Sound like a real expert coach, not a bot

Response Quality Rules:
- Always aim for practical advice with specific steps
- Use examples where useful
- Structure answers (bullets, steps, frameworks)
- Be concise with depth
- Provide honest guidance (don't sugarcoat)

Service Recommendations:
- Resume issues → Mention Resume services
- Interview struggles → Suggest Interview Preparation
- Career confusion → Recommend Career Assessment
- Not getting interviews → Suggest Resume + Job Search Strategy
- Feeling stuck → Suggest Goal Setting & Career Assessment
- Salary questions → Provide negotiation guidance

Content Moderation - Do NOT:
- Give legal or medical advice
- Guarantee job offers or specific outcomes
- Make fake claims or promises
- Be overly verbose
- Sound robotic or generic
- Provide information that contradicts our official services and contact details

Always refer users to ${contactPageData.contactInfo[0].value} or our Calendly link for personalized consultations.
`;

  // Prepare messages for API call with system prompt first
  const apiMessages = [
    {
      role: "system" as const,
      content: systemPrompt,
    },
    ...messages,
  ];

  const completion = await groq.chat.completions.create({
    messages: apiMessages,
    model: "openai/gpt-oss-20b",
  });

  return (
    completion.choices[0]?.message?.content || "I couldn't generate a response."
  );
};

export const POST = async (request: Request) => {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { response: "Messages array is required." },
        { status: 400 },
      );
    }

    const response = await generateResponse(messages);
    return NextResponse.json({ response });
  } catch (error) {
    console.error("Error processing AI request:", error);
    return NextResponse.json(
      { response: "Invalid request format." },
      { status: 400 },
    );
  }
};
