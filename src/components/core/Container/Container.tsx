import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function Container({ children }: Props) {
    return (
        <div className="flex h-lvh w-full p-4 antialiased items-center justify-center">
            {children}
        </div>
    );
}
