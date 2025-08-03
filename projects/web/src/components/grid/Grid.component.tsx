import { ReactNode } from "react";

export default function Grid({ children }: { children: ReactNode }) {
    return <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
        {children}
    </div>
}