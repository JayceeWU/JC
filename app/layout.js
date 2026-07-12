import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jaycee Wu",
    template: "%s | Jaycee Wu"
  },
  description:
    "Portfolio of Jaycee Wu",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/Favicon.png",
    shortcut: "/Favicon.png",
    apple: "/Favicon.png"
  },
  openGraph: {
    title: "Jaycee Wu",
    description:
      "Full-stack engineer building practical applications across web systems, AI agents, and data products.",
    url: "/",
    siteName: "Jaycee Wu",
    type: "website"
  }
};

export const viewport = {
  themeColor: "#120923",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
