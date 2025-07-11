import type { ReactNode } from "react"

type Props = React.ComponentProps<"button"> & {
    iconLeft?: ReactNode
}


export function Button({ type = "button", iconLeft, children, ...rest }: Props) {
    return (
        <button
            {...rest}
            className="flex items-center justify-center gap-2 border bg-transparent p-3 rounded-lg cursor-pointer hover:bg-purply-100/40 transition ease-linear text-purply-100/50"
        >
            {iconLeft}{children}
        </button>
    )
}