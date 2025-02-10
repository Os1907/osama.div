import type { Metadata } from "next";
import "./Styles/globals.css";
import "./Styles/background.css"


export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Osama Mohamed",
=======
  title: "Osama Dev",
>>>>>>> f1056677694828cc6bac3dbd89c01d30843df820
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
