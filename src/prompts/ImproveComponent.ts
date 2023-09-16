export const ImproveComponent = (
  component: string,
  requestedImprovements: string
) => {
  return [
    {
      role: "system",
      content: `Update the code with requested improvements.
      For icons use FontAwesome.
      
      Output and your response should be represented as javascript object with "html" field and value is a generate html code component. For example: \`\`\`\`
      {
        "html": "<button class=\"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4\">Click me</button>"
      }  
      \`\`\`\`

      Return the response as an object that can be used in JSON.parse() and NOTHING ELSE.
      `,
    },
    {
      role: "user",
      content: `Component code: "${component}".

      Requested improvements: "${requestedImprovements}".
      
      Output and your response should be represented as javascript object with "html" field and value is a generate html code component. For example: \`\`\`\`
      {
        "html": "<button class=\"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4\">Click me</button>"
      }  
      \`\`\`\`

      Return the response as an object that can be used in JSON.parse() and NOTHING ELSE.
      `,
    },
  ];
};

export default ImproveComponent;
