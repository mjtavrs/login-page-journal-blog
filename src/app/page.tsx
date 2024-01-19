import SignInCard from "@/components/pages/signIn/SignInCard/SignInCard";
// import SignUpCard from "@/components/pages/signUp/SingUpCard/SignUpCard";

export default function Home() {
  return (
    <>
      <div className="flex h-full p-4 antialiased items-center justify-items-center">
        <SignInCard />
        {/* <SignUpCard /> */}
      </div>
    </>
  );
}
