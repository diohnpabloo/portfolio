import type { ReactNode } from "react";

type TagTitleProps = React.ComponentProps<"div"> & {
    iconLEft?: ReactNode;
};

export function TagTitle({ children, iconLEft, ...rest }: TagTitleProps) {
    return (
        <div className="bg-primary/10 p-2 rounded-2xl w-max" {...rest}>
            <h2 className="text-primary font-tag">{iconLEft}{children}</h2>
        </div>
    );
}