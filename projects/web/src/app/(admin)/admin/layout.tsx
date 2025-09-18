import type { Metadata } from "next";
import authAction from "./auth.action";

export const metadata: Metadata = {
  title: "Anmeldung zum 24 Stunden Schwimmen 2025",
  description: "Anmeldung zum 24 Stunden Schwimmen 2025",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await authAction();
  return <>{children}</>;
}
