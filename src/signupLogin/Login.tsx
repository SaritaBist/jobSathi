import {Button,  PasswordInput, TextInput} from "@mantine/core";
import {IconAt, IconLock} from "@tabler/icons-react";
import {Link} from "react-router-dom";

const Login=()=>{
    return (
        <div className="h-full flex flex-col  gap-2 justify-center w-1/2 sm-mx:w-full px-20 bs-mx:px-10  md-mx:px-5 sm-mx:px-10">
            <div className="text-2xl font-semibold mb-5 md-mx:mb-2  md-mx:text-xl text-center ">Login</div>


            <TextInput
                withAsterisk
                leftSectionPointerEvents="none"
                leftSection={<IconAt className="!h-5 !w-5"/>}
                label="Email"
                placeholder="Enter your email"
            />
            <PasswordInput
                leftSection={<IconLock className="!h-5 !w-5" stroke={1.5}/>}
                label="Password"
                withAsterisk
                placeholder="Enter your password"
            />

            <Button autoContrast variant="filled">Sign In</Button>
            <div className='mx-auto sm-mx:text-xs mt-2'>Don't Have an account ? <Link to={'/signup'} className='text-bright-sun-400 hover:underline'>Sign Up</Link>
            </div>
        </div>

    )
}
export default Login