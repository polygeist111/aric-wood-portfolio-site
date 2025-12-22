import type { Metadata } from "next";
import Scroll_Behavior_Polyfill from "./components/scroll-behaviour_polyfill";
import "./styles/globals.css";
import "./lib/card_expansion.js"


export const metadata: Metadata = {
  metadataBase: new URL("https://aricwood.com"),
  title: "Aric Wood — Strategy to Reality",
  description: "Strategy Activation, Change & Transformation, Vision & Strategic Planning, and Facilitation.",
  openGraph: {
    title: "Aric Wood — Strategy to Reality",
    description: "Strategy Activation, Change & Transformation, Vision & Strategic Planning, and Facilitation.",
    url: "https://aricwood.com",
    siteName: "Aric Wood",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aric Wood — Strategy to Reality",
    description: "Strategy Activation, Change & Transformation, Vision & Strategic Planning, and Facilitation.",
    images: ["/og.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  // Kick off the polyfill! It will detect native support and only act if needed.

  return (
    <html lang="en">
      <Scroll_Behavior_Polyfill/>
      <body className="bg-white text-black">
        {children}
        {gaId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date()); gtag('config', '${gaId}');` }} />
          </>
        ) : null}
      </body>
    </html>
  );
}
