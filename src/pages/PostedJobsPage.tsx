import PostedJobs from "../PostedJobs/PostedJobs.tsx";
import PostedJobDesc from "../PostedJobs/PostedJobDesc.tsx";


const PostedJobsPage=()=>{

    return<div className="min-h-[100vh]  min-w-fit bg-mine-shaft-900  font-['poppins'] py-2 px-4 mx-auto">
        <div className='flex gap-6 '>
          <PostedJobs/>
            <PostedJobDesc/>
        </div>
    </div>

}
export default PostedJobsPage