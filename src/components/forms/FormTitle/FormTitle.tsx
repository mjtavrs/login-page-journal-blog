type Props = {
    mainTitle: string,
    description: string
}

export default function FormTitle({ mainTitle, description }: Props) {
    return (
        <>
            <h2 className="text-[19px] font-light mb-6">Welcome</h2>
            <h1 className="text-2xl font-medium">{mainTitle}</h1>
            <p className="mb-11">{description}</p>
        </>
    );
}
