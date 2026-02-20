
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function exploreLandscape(topic: string) {
  const prompt = `L'utilisateur s'interroge sur le sujet suivant lié à la parentalité : "${topic}". 
  En tant que guide Parenta, ton rôle n'est PAS de donner des réponses ou des conseils, mais de "montrer le paysage global".
  Explique quelles sont les différentes approches existantes, les tensions possibles, et les points de réflexion pour ce sujet.
  Utilise un ton sobre, rassurant, et neutre. Pas d'injonctions.
  
  Structure ta réponse en JSON avec :
  - title: un titre court
  - overview: une brève introduction du paysage
  - dimensions: une liste de 3 points clés à explorer
  - question: une question ouverte pour aider le parent à se situer.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            overview: { type: Type.STRING },
            dimensions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            question: { type: Type.STRING }
          },
          required: ["title", "overview", "dimensions", "question"]
        }
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error exploring landscape:", error);
    throw error;
  }
}
