import "./globals.css";

export const metadata = {
  title: "Jaycee Jiaxuan Wu",
  description: "Portfolio configuration shell for Jaycee Jiaxuan Wu."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
