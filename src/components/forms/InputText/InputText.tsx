import Link from "next/link";

type Props = {
    text: string,
    link: string
}

export default function InputText({ text, link }: Props) {
    return (
        <div className="text-center text-xs">
            <p><span className="text-gray-300 font-light">{text}</span> <Link href="#" className="font-semibold">{link}</Link></p>
        </div>
    );
}