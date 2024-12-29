import {IconBrandBebo} from "@tabler/icons-react";
import SignUp from "../signupLogin/SignUp.tsx";

const SignUpPage=()=>{
    return(
        <div className="min-h-[100vh]  bg-mine-shaft-950  font-['poppins'] ">

            <div className=" w-[100vw] h-[100vh]  flex   ">
                <div className=" flex  flex-col  gap-4 items-center justify-center w-[50%]  h-full bg-mine-shaft-800 rounded-r-[200px] sm-mx:hidden  ">
                    <div className="flex  gap-1 items-center">
                        <IconBrandBebo className="text-bright-sun-400 h-16 w-16 md-mx:h-12 md-mx:w-12"/>
                        <div className="text-6xl text-bright-sun-400 bs-mx:text-5xl  md-mx:text-4xl">jobSathi</div>
                    </div>
                    <div className='text-2xl font-semibold bs-mx:text-xl md-mx:text-lg'>
                        Find the made for you
                    </div>
                </div>
                <SignUp/>
            </div>
        </div>
    )
}
export default SignUpPage