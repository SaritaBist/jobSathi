import {IconBrandBebo} from "@tabler/icons-react";
import SignUp from "../signupLogin/SignUp.tsx";

const SignUpPage=()=>{
    return(
        <div className="min-h-[100vh] min-w-fit bg-mine-shaft-950  font-['poppins'] ">

            <div className=" w-[100vw] h-[100vh]  flex   ">

                <div className=" flex  flex-col  gap-4 items-center justify-center w-[50%]  h-full bg-mine-shaft-800 rounded-r-[30%]  ">
                    <div className="flex  gap-1 items-center">
                        <IconBrandBebo className="text-bright-sun-400 h-16 w-16"/>
                        <div className="text-6xl text-bright-sun-400">jobSathi</div>
                    </div>
                    <div className='text-2xl font-semibold'>
                        Find the made for you
                    </div>
                </div>
                <SignUp/>
            </div>
        </div>
    )
}
export default SignUpPage