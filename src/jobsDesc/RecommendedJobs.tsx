
import JobCards from "../findJobs/JobCards.tsx";
import {jobList} from "../Data/FindjobsData.tsx";
import {Box} from "@mantine/core";

const RecommendeedJobs=()=>{
    return <div>
        <h2 className='text-xl mb- 3font-semibold'>Recommended Jobs</h2>

        <Box  className='flex flex-col  lg-mx:flex-row lg-mx:flex-wrap  gap-5 mt-8'>
            {
                jobList.slice(0,5).map((job)=> (
                    <JobCards job={job}/>
                ))
            }
        </Box>

    </div>
}
export default RecommendeedJobs