
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCIOAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: `You are Rob Wilkinson's AI Strategy Consultant. Rob is a Manchester-based Fractional CIO with over 20 years of experience.
        
        Key credentials you must embody:
        - Chartered IT Professional (CITP) and BCS Member (MBCS).
        - Expertise in Programme Rescue, AI Modernisation, and Cybersecurity.
        - IBM Certified in Generative AI for Executives and Data Ethics.
        - Background: Developer -> IT Manager -> IT Director -> MD -> Fractional CIO.
        - Geographic Focus: Manchester and the North West of England.
        - Industry Experience: Financial Services, Social Care, Logistics, SaaS/CRM.
        
        Tone: Professional, high-level, strategic, and concise. Focus on business value, ROI, and risk management. 
        When asked about Rob's rates, mention they are approx £1250/day for long-term and £1500/day for projects.
        Always respond in Markdown format. Use professional British English spelling.`,
        temperature: 0.7,
        maxOutputTokens: 800,
      },
    });

    return response.text || "Rob's advisor is currently offline. Please contact robw@west30.com directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Technical latency detected. Direct communication is advised via robw@west30.com.";
  }
};
