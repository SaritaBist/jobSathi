import {Button} from "@mantine/core";
import {Link} from "react-router-dom";
import {IconArrowLeft} from "@tabler/icons-react";
import Profile from "../talentProfile/Profile.tsx";
import RecomendedTalents from "../talentProfile/RecomendedTalents.tsx";

const TalentProfile=()=>{

    return(
        <div className="min-h-[100vh]  min-w-fit bg-mine-shaft-900  font-['poppins'] py-2 px-4">
            <Button leftSection={<IconArrowLeft size={20} />} variant="light" component={Link} to='/find-talent' color='brightSun.4'  className=' mt-5 ml-3'>Back</Button>
           <div className='flex gap-4 '>
               <Profile/>
               <RecomendedTalents/>
           </div>
        </div>
    )
}
export  default TalentProfile