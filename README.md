# Dynamic JSON Validator ⚡

🎉 Welcome to the Dynamic JSON Validator API! This project provides a robust solution for converting unstructured data into structured JSON format based on a given schema. It leverages advanced AI models to ensure accurate and efficient data transformation.

## Table of Contents
- [Introduction 📜](#introduction-)
- [Features 🍟](#features-)
- [Installation 🫎](#installation-)
- [Usage 🐥](#usage-)
- [Example 🪄](#example-)
- [Technologies Used 🦄](#technologies-used-)
- [Contributing](#contributing-)
- [License](#license-)
- [Contact](#contact-)

## Introduction 📜
The Dynamic JSON Validator helps you convert unstructured data into a predefined JSON format, validating it dynamically. With retry mechanisms and schema validation, it's robust and reliable.

## Features 🍟
- **🛠️ Flexible Data Conversion** Converts various data types into JSON.
- **🔄 Retry Mechanism:** Retries the conversion process in case of errors.
- **📜 Schema Validation:** Ensures the output matches the provided schema.
- **🚀 Fast and Efficient:** Leverages advanced AI models for quick data processing.

## Installation 🫎
To set up the project locally, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/mutasim77/json-data-converter-api.git
cd json-data-converter-api
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up the environment variables:
- Create a `.env` file in the root of your project.
- Add the following environment variable to the `.env` file:
```
GEMINI_API_KEY=your-gemini-api-key
```
> Replace *your-gemini-api-key* with your actual Gemini API key.

4. Run the development server:
```bash
pnpm run dev
```

## Usage 🐥
Send a `POST` request with your data and schema to the `/validate` endpoint.

Request Body: 
- **data:** The unstructured data to be converted.
- **format:** The JSON schema defining the expected output format.

#### Example:
```js
{
  "data": "Mutasim is 404 enthusiast who loves coding and building things from scratch.",
  "format": {
    "name": { "type": "string" },
    "occupation": { "type": "string" },
    "isEnthusiast": { "type": "boolean" },
    "hobbies": {
      "type": "array",
      "items": { "type": "string" }
    }
  }
}
```
#### Response
```js
{
  name: "Mutasim",
  occupation: "404 enthusiast",
  isEnthusiast: true,
  hobbies: [
     "coding",
     "building things from scratch"
  ]
}
```

## Example 🪄
Here's how you can use `curl` to make a POST request to the API:
```js
curl -X POST \
  http://localhost:3000/validate \
  -H 'Content-Type: application/json' \
  -d '{
    "data": "John Doe is a 30-year-old software engineer who loves to build innovative applications.",
    "format": {
      "name": { "type": "string" },
      "age": { "type": "number" },
      "profession": { "type": "string" },
      "hobbies": {
        "type": "array",
        "items": { "type": "string" }
      }
    }
  }'
```

#### Response:
```js
{
  name: "John Doe",
  age: 30,
  profession: "software engineer",
  hobbies: [
     "building innovative applications"
  ]
}
```

## Technologies Used 🦄
- **Next.js:** For server-side rendering and API routes.
- **TypeScript:** To add static type definitions.
- **Zod:** For schema validation.
- **Gemini AI:** For data conversion and processing.

## Contributing 🐛
Contributions are Welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a Pull Request.

## License 💳
This project is licensed under the MIT License. See the [LICENSE](/LICENSE) file for details.

## Contact 🩶
For any questions or suggestions, feel free to open an issue or just [contact me](https://www.mutasim.top/contact)
