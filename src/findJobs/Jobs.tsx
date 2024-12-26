import Sort from "./Sort.tsx";
import {Box} from "@mantine/core";
import JobCards from "./JobCards.tsx";
import {jobList} from "../Data/FindjobsData.tsx";
import {Link} from "react-router-dom";
import {useMediaQuery} from "@mantine/hooks";


 const Jobs=()=>{


    return(<div className='py-6 sm-mx:px-4 px-8'>
        <div className=" flex justify-between px-2 xs-mx:flex-wrap xs-mx:gap-3">

            <div className='font-semibold text-xl xs-mx:text-lg'>Recommended Jobs</div>
            <Sort/>
        </div>
        <Box component={Link} to={'/jobs'} className='flex flex-wrap xl-mx:justify-center gap-3 mt-8'>
            {
                jobList.map((job)=> (
                    <JobCards job={job}/>
                ))
            }
        </Box>

    </div>)
}
export default Jobs