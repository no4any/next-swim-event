"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"

export default function AdminMenu() {
    const path = usePathname();

    return <aside className="min-h-[100vh] sticky top-0">
        <ul>
            <li><Link href="/admin" className={`${path === ("/admin")?"font-bold":""}`}>Dashboard</Link></li>
            <li><Link href="/admin/swimmers" className={`${path.startsWith("/admin/swimmers")?"font-bold":""}`}>Schwimmer</Link></li>
            <li><Link href="/admin/colors" className={`${path.startsWith("/admin/colors")?"font-bold":""}`}>Farben</Link></li>
            <li><Link href="/admin/users" className={`${path.startsWith("/admin/users")?"font-bold":""}`}>Benutzer</Link></li>
        </ul>
    </aside>
}