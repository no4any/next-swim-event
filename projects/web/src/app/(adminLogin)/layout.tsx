import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Login",
  description: "Login",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`min-h-screen bg-linear-45 to-dlrg-red from-10% from-dlrg-blue antialiased`}
      >
        <div className="flex flex-row min-h-screen justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}