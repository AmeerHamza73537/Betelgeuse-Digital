import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Betelgeuse Digital — Digital Growth, Web & Agentic AI",
  description:
    "Betelgeuse Digital builds high-performance campaigns, digital products, and agentic AI systems for ambitious businesses.",
  openGraph: {
    title: "Betelgeuse Digital",
    description:
      "Digital growth with a gravitational pull. Strategy, systems, and scale for ambitious businesses.",
    type: "website",
    siteName: "Betelgeuse Digital",
  },
  twitter: {
    card: "summary",
    title: "Betelgeuse Digital",
    description:
      "Digital growth with a gravitational pull. Strategy, systems, and scale for ambitious businesses.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0e14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
