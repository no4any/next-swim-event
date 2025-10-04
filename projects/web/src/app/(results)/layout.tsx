import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Anmeldung zum 24 Stunden Schwimmen 2025",
  description: "Anmeldung zum 24 Stunden Schwimmen 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`min-h-screen bg-linear-45 to-dlrg-red from-10% from-dlrg-blue antialiased`}
      >
        <div className="mt-2 mx-auto max-w-[1200px] p-5 bg-white/30 backdrop-blur-2xl rounded-xl">
          {children}
        </div>
      </body>
    </html>
  );
}
