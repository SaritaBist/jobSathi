import SearchBar from "../findJobs/SearchBar.tsx";
import Jobs from "../findJobs/Jobs.tsx";
import {Divider} from "@mantine/core";


const FindJobs=()=>{




    return(
        <div className="min-h-[100vh]   bg-mine-shaft-900 pb-16 font-['poppins']">

            <SearchBar/>
            <Divider size={'md'} mx='md' className='mt-5'/>
            <Jobs />

        </div>)
}
export  default  FindJobs