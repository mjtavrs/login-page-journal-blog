type Props = {
    title: string
}

export default function Button({ title }: Props) {
    return (
        <button className="bg-gray-700 text-white py-4 rounded-md font-medium mb-8">{title}</button>
    );
}