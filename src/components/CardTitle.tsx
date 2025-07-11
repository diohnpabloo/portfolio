import type { ReactNode } from "react";

type CardTitleProps = React.ComponentProps<"div"> & {
    iconLEft?: ReactNode;
};

export function CardTitle({ children, iconLEft, ...rest }: CardTitleProps) {
    return (
        <div className="bg-purply-100/10 p-2 rounded-2xl w-max" {...rest}>
            <h2 className="text-purply-100">{iconLEft}{children}</h2>
        </div>
    );
}