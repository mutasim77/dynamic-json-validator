import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <section className="bg-yellow-500 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold mb-4 text-black">Convert Any Data to JSON ⚡</h1>
          <p className="text-xl">Effortlessly convert and validate unstructured data into dynamic JSON formats with this powerful tool.</p>
        </div>
        <div className="container mx-auto text-center mt-10">
          <div className="border-4 border-dashed border-gray-600 p-1 rounded-lg inline-block">
            <Image src="/hero-image.png" alt="Code Screenshot" className="max-w-full rounded-lg h-auto" width={1000} height={1000} />
          </div>
        </div>
      </section>

      <section className="flex gap-4 container m-auto border-b border-black">
        <div className="py-20 flex-1 border-r border-black pr-5">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">What is Dynamic JSON Validator? 🤓</h2>
            <p className="text-lg mb-4">
              Dynamic JSON Validator is a tool designed to simplify the process of converting unstructured data into JSON formats. Using OpenAI&apos;s API and Zod for schema validation, our tool ensures that your data is accurately structured and validated.
            </p>
          </div>
        </div>
        <div className="py-20 flex-1">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">How It Works? 🧐</h2>
            <p className="text-lg">
              Our tool takes unstructured data and converts it into a structured JSON format. You simply provide the data and the expected JSON schema, and our tool does the rest, ensuring the output is valid and well-structured.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Get Started</h2>
          <p className="text-lg">
            Ready to streamline your data conversion process? <a href="https://github.com/mutasim77/dynamic-json-validator" className="text-blue-600 underline">Visit our GitHub repository</a> to get started.
          </p>
        </div>
      </section>
    </div>
  )
}