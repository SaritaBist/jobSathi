
import FindDreamJob from "../langingpage/FindDreamJob.tsx";
import Companies from "../langingpage/Companies.tsx";
import JobCategory from "../langingpage/JobCategory.tsx";
import Working from "../langingpage/Working.tsx";
import Testimonials from "../langingpage/Testimonials.tsx";
import Subscribe from "../langingpage/Subscribe.tsx";






const HomePage=()=>{
return(
    <div className="min-h-screen min-w-screen min-w-full font-['poppins'] pb-16 bg-mine-shaft-900 overflow-x-hidden overflow-y-hidden  ">

            <FindDreamJob/>
            <Companies/>
            <JobCategory/>
            <Working/>
            <Testimonials/>
            <Subscribe/>


    </div>)

}
export  default  HomePage