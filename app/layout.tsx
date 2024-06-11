import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Dynamic JSON Validator",
  description: "Effortlessly convert and validate unstructured data into dynamic JSON formats with this powerful tool.",
  keywords: ["JSON validator", "data conversion", "schema validation", "dynamic JSON", "unstructured data", "OpenAI", "Zod", "Next.js"],
  authors: [{ name: "Mutasim", url: "https://mutasim.top" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Dynamic JSON Validator - Effortlessly Convert and Validate Unstructured Data",
    description: "Dynamic JSON Validator simplifies the process of converting unstructured data into JSON formats. Powered by OpenAI's API and Zod for schema validation.",
    type: "website",
    url: "https://yourwebsite.com",
    locale: 'en_US',
    images: "", // TODO: Add OG image
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
