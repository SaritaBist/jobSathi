import Sort from "./Sort.tsx";
import {Box, Divider} from "@mantine/core";
import JobCards from "./JobCards.tsx";
import {jobList} from "../Data/FindjobsData.tsx";
import {Link} from "react-router-dom";


 const Jobs=()=>{

    return(<div className='py-6 px-8'>
        <div className=" flex justify-between">

            <div className='font-semibold text-xl'>Recommended Jobs</div>
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