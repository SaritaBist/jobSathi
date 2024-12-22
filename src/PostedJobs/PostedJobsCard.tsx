
const PostedJobsCard=({job}:any)=>{
return(
    <div className="p-2 bg-mine-shaft-800 flex  flex-col  rounded-xl border-l-2 border-l-bright-sun-400">
         <div className="font-semibold">{job.jobTitle}</div>
         <div className="text-xs text-mine-shaft-300 font-medium">{job.location}</div>
         <div className="text-xs text-mine-shaft-300">{job.posted}</div>
    </div>
)
}
export  default  PostedJobsCard