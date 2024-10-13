import type { Metadata } from "next";
import "./Styles/globals.css";
import "./Styles/background.css"


export const metadata: Metadata = {
  title: "Osama.dev",
  description: "Front End Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
