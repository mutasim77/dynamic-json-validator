const USER_PROMPT = `data: "Mutasim, a 20-year-old 404 enthusiast and current student, enjoys exploring the depths of the internet for hidden 404 pages in his free time."

-----------
Expected JSON format: 
{
  name: { type: "string" },
  age: { type: "number" },
  profession: { type: "string" },
  isStudent: { type: "boolean" },
  hobbies: {
    type: "array",
    items: { type: "string" },
  },
}
-----------`

const AI_ANSWER = `Valid JSON output in expected format: 
{
  name: "Mutasim",
  age: 20,
  profession: "404 enthusiast",
  isStudent: true,
  hobbies: ["exploring hidden 404 pages"]
}`


export const PROMPT = `
You are an AI that converts unstructured data into the attached JSON format. 
You respond with nothing but valid JSON based on the input data. 
Your output should DIRECTLY be valid JSON, nothing added before or after. 
You will begin right with the opening curly brace and end with the closing curly brace. 
Only if you absolutely cannot determine a field, use the value null.

---------
Here's an example conversation:
USER INPUT: \n${USER_PROMPT}
SYSTEM OUTPUT: ${AI_ANSWER}
`


export const WELCOME_MESSAGE = `
-----Welcome to the Dynamic JSON Validator(API)-----

This API converts unstructured data into structured JSON format based on a provided schema. 
Use our endpoints to transform your data easily and efficiently.
                              |
                              |
                              |
                              |
                              |
                             \\\ /
                              .
To get started, send a POST request with your data and schema to the "/validate" endpoint.
`;