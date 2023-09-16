export const ComponentGeneration = (component: string) => {
  return [
    {
      role: "system",
      content: `You are smart AI that can generate HTML components code with TailwindUI styling.
      
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
      content: `_COMPONENT_: ${component}

      Objective: Create an HTML component that represents _COMPONENT_ a  styled with TailwindUI. 
      
      Do the following steps:
      1.Designing the Component:
      1.1. Begin with a clear and concise structure for your HTML component.
      1.2. Visualize the layout and elements required for a _COMPONENT_. Investigate design trends for  _COMPONENT_.
      2. Applying TailwindUI Styling:
      2.1.Utilize TailwindUI's utility classes to style each element of your component. Be meticulous to ensure no elements are left unstyled unless intentionally done.
      2.2. For clarity and maintainability, ensure every HTML element that requires styling has the relevant TailwindUI class names attached. This not only promotes consistent styling but also helps in future debugging or customization.
      3. Validation & Testing:
      3.1. Thoroughly review your code to confirm that all necessary classes and elements are present.
      4. Generating the Output:
      4.1. Your final deliverable should strictly be the code for the HTML component with TailwindUI styling. No additional files, comments, or extraneous elements should be present.
      4.2. Ensure all class names are intact and correctly implemented.
      
      Follow instructions above and create a professional and polished Terminal UI component using TailwindUI. Ensure the highest standards in code quality, and ensure thorough testing for the best results.

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

export default ComponentGeneration;
