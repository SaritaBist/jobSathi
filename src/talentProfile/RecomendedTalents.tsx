import {talents} from "../Data/FindTalentData.tsx";
import TalentCard from "../findtalent/TalentCard.tsx";

const RecomendedTalents=()=>{
    return <div>
        <h2 className='text-xl mb- 3font-semibold'>Recommended Talents</h2>
        <div className='flex flex-col gap-4 justify-center mt-8 flex-wrap'>
            {
                talents.slice(0,4).map((talent, index:number) => (
                    <TalentCard key={index} talent={talent}/>
                ))
            }
        </div>
    </div>
}
export default RecomendedTalents