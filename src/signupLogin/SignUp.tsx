import {Button, Checkbox, PasswordInput, TextInput} from "@mantine/core";
import {IconAt, IconLock} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";



const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Confirm password is required"),
    remember: Yup.boolean(),
}).required();

type Inputs = {
    name:string,
    email: string;
    password: string;
    confirmPassword: string;
    remember?: boolean;
};

const SignUp=()=>{

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
    return(
        <div
            className=" h-full flex flex-col  gap-2 justify-center w-1/2 sm-mx:w-full px-20 bs-mx:px-10  md-mx:px-5 sm-mx:px-10  ">
            <div className="text-2xl font-semibold mb-5 md-mx:mb-2  md-mx:text-xl  ">Create Account</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    label="Name"
                    withAsterisk
                    placeholder="Enter your name"
                    {...register('name')}
                    error={errors.name?.message}
                />
                <TextInput
                    withAsterisk
                    leftSectionPointerEvents="none"
                    leftSection={<IconAt className="!h-5 !w-5"/>}
                    label="Email"
                    placeholder="Enter your email"
                    {...register('email')}
                    error={errors.email?.message}
                />
                <PasswordInput
                    leftSection={<IconLock className="!h-5 !w-5" stroke={1.5}/>}
                    label="Password"
                    withAsterisk
                    placeholder="Enter your password"
                    {...register("password")}
                    error={errors.password?.message}
                />
                <PasswordInput
                    leftSection={<IconLock className="!h-5 !w-5" stroke={1.5}/>}
                    label="Confirm Password"
                    withAsterisk
                    placeholder="Renter your password"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword?.message}
                />
                <Checkbox
                    autoContrast
                    label="Remember me"
                    {...register("remember")}
                />
                <Button autoContrast variant="filled " type="submit" className="mt-6">Sign Up</Button>
            </form>
                <div className='mx-auto sm-mx:text-xs mt-2'>Have an account ? <Link to={'/login'}
                                                                                    className='text-bright-sun-400 hover:underline'>Login</Link>
                </div>
        </div>
)
}
export  default SignUp