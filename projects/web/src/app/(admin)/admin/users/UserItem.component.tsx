"use client"

import { User } from "@/lib/model";

export default function UserItem({user}: {user: User}) {
    return <div className="flex flex-row">
        <div className="basis-1/3">{user.email}</div>
        <div className="basis-1/3">{user.isAdmin?"Administrator":""}</div>
        <div className="basis-1/3">???</div>
    </div>
}