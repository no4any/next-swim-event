"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"

export default function AdminMenu() {
    const path = usePathname();

    return <aside className="min-h-[100vh] sticky top-0">
        {path}
        <ul>
            <li><Link href="/admin">Dashboard</Link></li>
            <li><Link href="/admin/swimmers">Schwimmer</Link></li>
            <li><Link href="/admin/colors">Farben</Link></li>
            <li><Link href="/admin/users">Benutzer</Link></li>
        </ul>
    </aside>
}