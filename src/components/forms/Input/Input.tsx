type Props = {
    title: string,
    type: string,
    name: string,
    id: string,
    placeholder: string
}

export default function Input({ title, type, name, id, placeholder }: Props) {
    return (
        <label className="flex flex-col gap-2">
            {title}
            <input className="border-[1px] border-gray-500 rounded-md placeholder:text-gray-100 placeholder:font-light p-5" type={type} name={name} id={id} placeholder={placeholder} />
        </label>
    );
}
