type Props = {
    title: string,
    type: string,
    name: string,
    id: string,
    placeholder: string
}

import Image from "next/image";
import passwordVisibility from "@/assets/image/svg/password-visibility.svg";

export default function Input({ title, type, name, id, placeholder }: Props) {
    return (
        <label className="flex flex-col gap-2">
            {title}
            <input className="border-[1px] border-gray-500 p-5 rounded-md placeholder:text-gray-100 placeholder:font-light" type={type} name={name} id={id} placeholder={placeholder} />
        </label>
    );
}