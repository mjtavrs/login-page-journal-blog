import { ReactNode } from "react";

type Props = {
    children: ReactNode
}

export default function InputWrapper({ children }: Props) {
    return (
        <div className="flex flex-col gap-9">
            {children}
        </div>
    );
}