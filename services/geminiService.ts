import { GoogleGenAI, Type } from "@google/genai";
import { IdeaResponse } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateWebsiteIdea = async (): Promise<IdeaResponse> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Give me a chaotic, fun, and possibly useless website idea that a teenager could build in a weekend for a hackathon. It should be creative and weird.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy, short title for the project" },
            description: { type: Type.STRING, description: "A 1-2 sentence description of what the site does" },
            vibe: { type: Type.STRING, description: "The aesthetic or mood (e.g., 'Chaotic Good', 'Retro', 'Glitchy')" }
          },
          required: ["title", "description", "vibe"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as IdeaResponse;
    }
    throw new Error("No response text");
  } catch (error) {
    console.error("Gemini Idea Gen Error:", error);
    return {
      title: "The Button",
      description: "A button that does nothing but plays a random sound effect from 1995.",
      vibe: "Nostalgic Uselessness"
    };
  }
};