# Dynamic JSON Validator ⚡

🎉 Welcome to the Dynamic JSON Validator! 🎉

Easily convert unstructured data into dynamic JSON formats with validation. This project leverages Gemini's API and Zod for schema validation.

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

3. Run the development server:
```bash
pnpm run dev
```

## Usage 🤩
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

## API Endpoints 🐝

### POST /validate
Converts and validates unstructured data into a JSON format based on the provided schema.

**Request Body:**
- `data`: Unstructured data to be converted.
- `format`: JSON schema to validate against.

**Response:**
- Returns _validated_ JSON data.

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
