import Link from "next/link";

import Card from "@/components/core/Card/Card";
import Form from "@/components/core/Form/Form";

import InputWrapper from "@/components/forms/InputWrapper/InputWrapper";
import FormTitle from "@/components/forms/FormTitle/FormTitle";
import InputText from "@/components/forms/InputText/InputText";
import Button from "@/components/forms/Button/Button";
import Input from "@/components/forms/Input/Input";

export default function SignInCard() {
    return (
        <Card>
            <FormTitle
                mainTitle="Sign in"
                description="Sign in to your account"
            />
            <Form>
                <InputWrapper>
                    <Input
                        title="Username"
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                    />
                    <Input
                        title="Password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                    />
                </InputWrapper>
                <div className="flex justify-between mt-6 mb-9 text-xs">
                    <div className="flex gap-1 content-center">
                        <input type="checkbox" name="remember_user" id="remember_user" />
                        <label htmlFor="remember_user">Remember me</label>
                    </div>
                    <Link href="#" className="text-gray-300 font-light">Forgot password?</Link>
                </div>
                <Button
                    title="Login"
                />
                <div className="text-center text-xs">
                    <InputText
                        text="Don't have an account?"
                        link="Register here!"
                        href="/register"
                    />
                </div>
            </Form>
        </Card>
    );
}
