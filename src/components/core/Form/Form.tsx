import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export default function Card({ children }: Props) {
    return (
        <form className="flex flex-col">
            {children}
        </form>
    );
}