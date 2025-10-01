import { auth } from "@/lib/auth/auth";
import "./admin.css";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import AdminMenu from "./AdminMenu.component";

export const metadata: Metadata = {
    title: "Administration",
    description: "Administration",
};

export const revalidate = 0
export const dynamic = 'force-dynamic';

export default async function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await auth();
    if (user === null) {
        redirect("/login");
    }
    return (
        <html lang="de">
            <body
                className={`antialiased`}
            >
                <div className="flex flwx-row">
                    <div className="basis-1/8">
                        <AdminMenu />
                    </div>
                    <main className="basis-7/8 overflow-scroll">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
