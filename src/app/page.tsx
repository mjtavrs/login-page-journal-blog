import Image from "next/image";

import SignInCard from "@/components/pages/signIn/SignInCard/SignInCard";
import PeopleReading from "@/assets/image/svg/people-reading.svg";

export default function Home() {
  return (
    <>
      <div className="flex h-full w-full p-4 antialiased items-center justify-center">
        <SignInCard />
        <Image
          src={PeopleReading}
          alt="Drawing of two people reading a blog post while they're sitting on the floor."
          className="max-[1300px]:hidden"
        />
      </div>
    </>
  );
}
