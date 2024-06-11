export const EXAMPLE_PROMPT = `DATA: \n"Mutasim, a 20-year-old 404 enthusiast and current student, enjoys exploring the depths of the internet for hidden 404 pages in his free time."\n\n-----------\nExpected JSON format: 
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
\n\n-----------\nValid JSON output in expected format:`

export const EXAMPLE_ANSWER = `{
  name: "Mutasim",
  age: 20,
  profession: "404 enthusiast",
  isStudent: true,
  hobbies: ["exploring hidden 404 pages"]
}`
