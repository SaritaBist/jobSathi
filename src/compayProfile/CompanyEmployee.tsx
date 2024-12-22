import {talents} from "../Data/FindTalentData.tsx";
import TalentCard from "../findtalent/TalentCard.tsx";

const  CompanyEmployee=()=>{
    return(<>
        <div className='flex flex-wrap gap-4  mt-8'>
            {
                talents.map((talent, index) => (
                    <TalentCard key={index} talent={talent}/>
                ))
            }
        </div>
    </>)
}
export default CompanyEmployee