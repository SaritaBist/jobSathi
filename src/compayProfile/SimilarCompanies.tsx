
import {similarCompanies} from "../Data/Company.tsx";
import CompanyCard from "./CompanyCard.tsx";

const SimilarCompanies=()=>{
    return (
        <div>
            <h2 className='text-xl mb- 3font-semibold'>Similar Companies</h2>
            <div className='flex flex-col gap-4 justify-center mt-8 flex-wrap'>
                {
                 similarCompanies.map(((item,index)=>(
                     <CompanyCard company={item} key={index}/>
                 )))
                }
            </div>
        </div>
    )
}
export default SimilarCompanies