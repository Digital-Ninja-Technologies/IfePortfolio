import { Handler } from "@netlify/functions";

const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  try {
    const { messages, system } = JSON.parse(event.body || "{}");

    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      console.error("GROQ_API_KEY not set");
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "GROQ_API_KEY not configured" }),
      };
    }

    const formattedMessages = [
      { role: "system", content: system },
      ...messages,
    ];

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: formattedMessages,
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Groq API error:", errorData);
      return {
        statusCode: response.status,
        body: JSON.stringify({
          error: "Failed to get response from AI",
          details: errorData,
        }),
      };
    }

    const data = await response.json();

    const formattedResponse = {
      content: [
        {
          type: "text",
          text: data.choices[0].message.content,
        },
      ],
    };

    return {
      statusCode: 200,
      body: JSON.stringify(formattedResponse),
    };
  } catch (error) {
    console.error("Error in ai-chat function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Internal server error",
        message: error instanceof Error ? error.message : "Unknown error",
      }),
    };
  }
};

export { handler };
