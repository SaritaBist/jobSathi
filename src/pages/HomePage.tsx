import Header from "../header/Header.tsx";
import FindDreamJob from "../langingpage/FindDreamJob.tsx";
import Companies from "../langingpage/Companies.tsx";
import JobCategory from "../langingpage/JobCategory.tsx";

const HomePage=()=>{
return(
    <div className="min-h-[100vh] bg-mine-shaft-900">
        <Header/>
        <FindDreamJob/>
        <Companies/>
        <JobCategory/>
    </div>)
}
export  default  HomePage