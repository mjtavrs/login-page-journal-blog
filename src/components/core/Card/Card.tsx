import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export default function Card({ children }: Props) {
    return (
        <div className="w-full min-[1024px]:w-[500px] border-[1px] border-gray-100 rounded-xl px-5 py-9">
            {children}
        </div>
    );
}
