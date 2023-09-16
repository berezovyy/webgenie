import type { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import ComponentGeneration from "~/prompts/ComponentGeneration";

type Data = {
  data: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const openai = new OpenAI();
  const { component } = req.body;

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo-0613",
    messages: ComponentGeneration(component),
  });

  console.log(ComponentGeneration(component));
  const response = chatCompletion?.choices?.[0]?.message?.content ?? "";

  res.status(200).json({ data: response });
}
