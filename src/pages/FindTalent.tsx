
import {Divider} from "@mantine/core";
import SearchBar from "../findtalent/SearchBar.tsx";
import Talent from "../findtalent/Talent.tsx";


const FindJobs=()=>{

    return(
        <div className="min-h-[100vh] min-w-fit mx-auto bg-mine-shaft-900 pb-16 font-['poppins']">

            <SearchBar/>
            <Divider size={'md'} mx='md' className='mt-5'/>
            <Talent/>

        </div>)
}
export  default  FindJobs