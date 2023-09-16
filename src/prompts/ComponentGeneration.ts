export const ComponentGeneration = (component: string) => {
  return [
    {
      role: "system",
      content: `Generate an HTML component using Tailwind UI based on the given component name.
      For icons use FontAwesome.
      
      Example of the generated OUTPUT(IT SHOULD LOOK LIKE THIS):  """
      {
        "html": "<button class=\\"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4\\">Click me</button>"
      }
      """
      Return the response as an object that can be used in JSON.parse() and NOTHING ELSE.
      `,
    },
    {
      role: "user",
      content: `Component name: "${component}".
      
      Example of the generated OUTPUT(IT SHOULD LOOK LIKE THIS):  """
      {
        "html": "<button class=\\"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4\\">Click me</button>"
      }
      """

      Return the response as an object that can be used in JSON.parse() and NOTHING ELSE.
      `,
    },
  ];
};

export default ComponentGeneration;
