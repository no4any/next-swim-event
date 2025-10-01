import { logout } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export async function GET() {
    await logout();
    redirect("/login");
}