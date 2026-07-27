import { headers } from "next/headers";
import "./globals.css";

const title = "Betelgeuse Digital — Growth, Web & AI";
const description =
  "Betelgeuse Digital builds campaigns, digital products, and practical AI systems for ambitious businesses.";

export async function generateMetadata() {
  const requestHeaders = await headers();
  const forwardedHost = requestHeaders.get("x-forwarded-host");
  const host = forwardedHost || requestHeaders.get("host") || "localhost:3000";
  const safeHost = /^[a-z0-9.-]+(?::\d+)?$/i.test(host)
    ? host
    : "localhost:3000";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol === "http" || safeHost.startsWith("localhost")
      ? "http"
      : "https";

  return {
    metadataBase: new URL(`${protocol}://${safeHost}`),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Betelgeuse Digital",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Betelgeuse Digital — ideas, systems, momentum",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export const viewport = {
  themeColor: "#0b0b0b",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
