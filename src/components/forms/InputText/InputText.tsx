import Link from "next/link";

type Props = {
    text: string,
    link: string,
    href: string
}

export default function InputText({ text, link, href }: Props) {
    return (
        <div className="text-center text-xs">
            <p><span className="text-gray-300 font-light">{text}</span> <Link href={href} className="font-semibold">{link}</Link></p>
        </div>
    );
}
