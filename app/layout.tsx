import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Providers from "./Providers";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  metadataBase: new URL("https://digitaledgestudio.com"),
  title: {
    default: "Web Design & Digital Marketing for Australian Small Businesses | Digital Edge Studio",
    template: "%s | Digital Edge Studio",
  },
  description:
    "Wollongong web design agency building fast, professional websites for tradies and small businesses. Affordable packages, local SEO, and more leads guaranteed.",
  openGraph: {
    siteName: "Digital Edge Studio",
    locale: "en_AU",
    type: "website",
    images: ["/images/blog/hero-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/digitaledge-favicon.png",
    apple: "/digitaledge-favicon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M362V53G');`}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M362V53G"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
