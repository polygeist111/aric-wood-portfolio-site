import type { Metadata } from "next";
import "./../styles/globals.css";

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
  icons: { icon: "https://polygeist111.github.io/aric-wood-portfolio-site/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return (
    <html lang="en">
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
        <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "REPLACE_WITH_CLOUDFLARE_TOKEN"}'></script>
      </body>
    </html>
  );
}
