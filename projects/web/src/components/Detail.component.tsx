import { ReactNode } from "react";

export default function Detail({ title, value }: { title: string, value: string | ReactNode }) {
    return <div>
        <div className="font-bold">{title}</div>
        <div>{value}</div>
    </div>
}