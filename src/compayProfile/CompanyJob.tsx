import {Box} from "@mantine/core";
import {Link} from "react-router-dom";
import {jobList} from "../Data/FindjobsData.tsx";
import JobCards from "../findJobs/JobCards.tsx";


const  CompanyJob=()=>{
    return(
        <>
            <Box component={Link} to={'/jobs'} className='flex flex-wrap gap-2 mt-8'>
                {
                    jobList.map((job)=> (
                        <JobCards job={job}/>
                    ))
                }
            </Box>

        </>
    )
}
export  default  CompanyJob