import OpenAI from "openai"
import dotenv from "dotenv"

dotenv.config();

if (!process.env.OPENAI_API_KEY) {
    console.log("No key");
    process.exit(1);
}


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const messages = [
    {
        role: "system",
        content: "Eres un asistente amable que ayuda a los usuarios  "
    },
    {
        role: "user",
        content: "Quien invento la television?"
    }
];



async function main() {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: messages
        });
        console.log(response.choices[0].message.content);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();

