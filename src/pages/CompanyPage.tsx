import {Button} from "@mantine/core";
import {IconArrowLeft} from "@tabler/icons-react";

import {useNavigate} from "react-router";
import CompanyDesc from "../compayProfile/CompanyDesc.tsx";
import SimilarCompanies from "../compayProfile/SimilarCompanies.tsx";


const CompanyPage=()=>{
    const navigate=useNavigate()
    return<div className="min-h-[100vh]  min-w-fit bg-mine-shaft-900  font-['poppins'] py-2 px-4 mx-auto">
        <Button leftSection={<IconArrowLeft size={20} />} variant="light" onClick={()=>navigate(-1)} color='brightSun.4'  className=' mt-5 ml-3'>Back</Button>
        <div className='flex gap-4  lg-mx:flex-col flex-row'>
            <CompanyDesc/>
            <SimilarCompanies/>
        </div>
    </div>

}
export default CompanyPage