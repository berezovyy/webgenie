export const ImproveComponent = (
  component: string,
  requestedImprovements: string
) => {
  return [
    {
      role: "system",
      content: `Update the code with requested improvements.
      For icons use FontAwesome.
      
      Example of the generated OUTPUT(IT SHOULD LOOK LIKE THIS):  """
      {
        "html": "<button class=\\"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4\\">Click me</button>"
      }
      """
      Return the response as an object with "html" field that can be used in JSON.parse() and NOTHING ELSE.
      `,
    },
    {
      role: "user",
      content: `Component code: "${component}".

      Requested improvements: "${requestedImprovements}".
      
      Example of the OUTPUT(IT SHOULD LOOK LIKE THIS):  """
      {
        "html": "<button class=\\"bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4\\">Click me</button>"
      }
      """

      Return the response as an object with "html" field that can be used in JSON.parse() and NOTHING ELSE.
      `,
    },
  ];
};

export default ImproveComponent;
