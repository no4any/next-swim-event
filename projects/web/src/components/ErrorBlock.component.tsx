import { ReactNode } from "react";

export default function ErrorBlock({ children }: { children: ReactNode }) {
    return <div className="p-2 mb-4 bg-dlrg-red rounded font-bold">{children}</div>
}