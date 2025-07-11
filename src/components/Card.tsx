import type { ReactNode } from "react";

type Props = {
    title?: string;
    description?: string;
    icon?: ReactNode
    className?: string;
}

export function Card({ title, description, icon, ...rest }: Props) {
    return (
        <div className={`flex flex-col border border-purply-100/40 p-4 rounded-4xl items-center justify-center gap-2 w-full max-w-sm h-full md:py- ${rest.className}`}>
            <p className="text-purply-100 text-7xl">{icon}</p>
            <p className="text-gray-500">{description}</p>
            <h2 className="text-white-100 text-2xl">{title}</h2>

        </div>
    )
}