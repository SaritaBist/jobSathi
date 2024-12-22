import Sort from "../findJobs/Sort.tsx";
import TalentCard from "./TalentCard.tsx";
import {talents} from "../Data/FindTalentData.tsx";

const Talent=()=>{
    return(<div className='py-6 px-8'>
        <div className=" flex justify-between">
            <div className='font-semibold text-xl'>Talents</div>
            <Sort/>
        </div>
        <div className='flex flex-wrap gap-4 justify-center mt-8'>
            {
                talents.map((talent,index)=> (
                    <TalentCard  key={index } talent={talent}/>
                ))
            }
        </div>
    </div>)
}
export default Talent