import {Button, Checkbox, PasswordInput, TextInput} from "@mantine/core";
import {IconAt, IconLock} from "@tabler/icons-react";
import {Link} from "react-router-dom";


const SignUp=()=>{
    return(
        <div className=" h-full flex flex-col  gap-2 justify-center w-1/2 sm-mx:w-full px-20 bs-mx:px-10  md-mx:px-5 sm-mx:px-10  ">
            <div className="text-2xl font-semibold mb-5 md-mx:mb-2  md-mx:text-xl  ">Create Account</div>

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
            <Button autoContrast variant="filled " className="mt-6">Sign Up</Button>
            <div className='mx-auto sm-mx:text-xs mt-2'>Have an account ? <Link to={'/login'} className='text-bright-sun-400 hover:underline'>Login</Link></div>
        </div>
    )
}
export  default SignUp