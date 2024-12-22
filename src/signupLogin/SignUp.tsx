import {Button, Checkbox, PasswordInput, TextInput} from "@mantine/core";
import {IconAt, IconLock} from "@tabler/icons-react";
import {Link} from "react-router-dom";


const SignUp=()=>{
    return(
        <div className="flex flex-col  gap-3 justify-center w-1/2 px-20">
            <div className="text-2xl font-semibold mb-5">Create Account</div>

               <TextInput
                   label="Name"
                   withAsterisk
                   placeholder="Enter your name"
               />
            <TextInput
                withAsterisk
                leftSectionPointerEvents="none"
                leftSection={<IconAt className="!h-5 !w-5" />}
                label="Email"
                placeholder="Enter your email"
            />
            <PasswordInput
                leftSection={<IconLock className="!h-5 !w-5" stroke={1.5} />}
                label="Password"
                withAsterisk
                placeholder="Enter your password"
            />
            <PasswordInput
                leftSection={<IconLock className="!h-5 !w-5" stroke={1.5} />}
                label="Confirm Password"
                withAsterisk
                placeholder="Renter your password"
            />
            <Checkbox
                 autoContrast
                label="Remember me"
            />
            <Button autoContrast variant="filled">Sign Up</Button>
            <div className='mx-auto'>Have an account ? <Link to={'/login'} className='text-bright-sun-400 hover:underline'>Login</Link></div>
        </div>
    )
}
export  default SignUp