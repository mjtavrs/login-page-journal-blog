import Card from "@/components/core/Card/Card";
import Form from "@/components/core/Form/Form";

import InputWrapper from "@/components/forms/InputWrapper/InputWrapper";
import FormTitle from "@/components/forms/FormTitle/FormTitle";
import InputText from "@/components/forms/InputText/InputText";
import Button from "@/components/forms/Button/Button";
import Input from "@/components/forms/Input/Input";

export default function SignUpCard() {
    return (
        <Card>
            <FormTitle
                mainTitle="Sign up"
                description="Sign up to your account"
            />
            <Form>
                <InputWrapper>
                    <Input
                        title="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter your email"
                    />
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
                    <Input
                        title="Repeat your password"
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        placeholder="Confirm your password"
                    />
                </InputWrapper>
                <div className="mb-7"></div>
                <Button
                    title="Register"
                />
                <div className="text-center text-xs">
                    <InputText
                        text="Already have an account?"
                        link="Login here!"
                        href="/"
                    />
                </div>
            </Form>
        </Card>
    );
}
