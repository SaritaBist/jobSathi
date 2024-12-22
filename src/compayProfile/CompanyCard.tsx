import {IconBookmark, IconExternalLink} from "@tabler/icons-react";

const  CompanyCard=({company}:any)=>{

    return(
        <>
            <div className={'flex  items-center justify-between gap-8 bg-mine-shaft-800 p-1.5 rounded-lg '}>
                <div className={'flex items-center gap-3'}>
                    <div className=' bg-mine-shaft-700 p-1 rounded-xl'>
                        <img src={`icons/${company.name}.png`} alt={'img'} className='h-8 w-8 rounded-full'/>
                    </div>
                    <div className="">
                        <div className='font-semibold text-mine-shaft-100'>{company.name}</div>
                        <p className=' text-mine-shaft-300'>{company.emp} Employees</p>

                    </div>
                </div>
                <IconExternalLink stroke={2} className='cursor-pointer text-bright-sun-400 '/>
            </div>
        </>
    )
}
export default CompanyCard