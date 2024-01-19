import Image from "next/image";

import SignUpCard from "@/components/pages/signUp/SingUpCard/SignUpCard";
import PeopleReading from "@/assets/image/svg/people-reading.svg";

export default function Register() {
    return (
        <>
            <div className="flex h-full w-full p-4 antialiased items-center justify-center">
                <SignUpCard />
                <Image
                    src={PeopleReading}
                    alt="Drawing of two people reading a blog post while they're sitting on the floor."
                    className="max-[1300px]:hidden"
                />
            </div>
        </>
    );
}
