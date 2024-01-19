import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function Container({ children }: Props) {
    return (
        <div className="flex h-lvh w-full p-4 max-[768px]:my-28 antialiased items-center justify-center">
            {children}
        </div>
    );
}
