import { Button, PasswordInput, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
}).required();

type Inputs = {
    email: string;
    password: string;
};

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data: Inputs) => {
        console.log(data);
    };

    return (
        <div className="h-full flex flex-col gap-2 justify-center w-1/2 sm-mx:w-full px-20 bs-mx:px-10 md-mx:px-5 sm-mx:px-10">
            <div className="text-2xl font-semibold mb-5 md-mx:mb-2 md-mx:text-xl text-center">
                Login
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    withAsterisk
                    leftSectionPointerEvents="none"
                    leftSection={<IconAt className="!h-5 !w-5" />}
                    label="Email"
                    placeholder="Enter your email"
                    {...register("email")}
                    error={errors.email?.message}
                />
                <PasswordInput
                    leftSection={<IconLock className="!h-5 !w-5" stroke={1.5} />}
                    label="Password"
                    withAsterisk
                    placeholder="Enter your password"
                    {...register("password")}
                    error={errors.password?.message}
                />
                <Button autoContrast variant="filled" fullWidth type="submit" className="mt-4">
                    Sign In
                </Button>
            </form>
            <div className="mx-auto sm-mx:text-xs mt-2">
                Don't Have an account?{" "}
                <Link to={"/signup"} className="text-bright-sun-400 hover:underline">
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export default Login;
