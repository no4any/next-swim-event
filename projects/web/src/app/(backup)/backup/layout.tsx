import type { Metadata } from "next";

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
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
