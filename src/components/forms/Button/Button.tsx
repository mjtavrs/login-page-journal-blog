type Props = {
    title: string
}

export default function Button({ title }: Props) {
    return (
        <button className="bg-gray-700 text-white font-medium rounded-md mb-8 py-4">
            {title}
        </button>
    );
}
