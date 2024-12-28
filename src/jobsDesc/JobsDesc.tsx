import { IconBookmark} from "@tabler/icons-react";
import {ActionIcon, Button, Divider} from "@mantine/core";
import {Link} from "react-router-dom";
import {card, desc, skills} from "../Data/JobDescData.tsx";
import DOMPurify from "dompurify"
const JobsDesc=({edit}:any)=>{
    const data= DOMPurify.sanitize(desc)

    return <>
        <div className=' lg-mx:w-full w-[70%] py-3 px-3  mt-4'>
            <div className="flex  items-center justify-between xs-mx:flex-wrap">
                <div className="flex items-center gap-3">
                    <div className='bg-mine-shaft-800 rounded-xl p-3'>
                        <img src={`icons/Microsoft.png`} alt={'img'} className='h-10 w-10'/>
                    </div>
                    <div className="">
                        <p className='text-semibold text-mine-shaft-200 text-xl xsm-mx:text-lg'>Software Engineer</p>
                        <p className='text-xs text-mine-shaft-300'>Microsoft &bull; 2 days ago &#x2022; 34
                            applications</p>
                    </div>
                </div>
                <div className='flex flex-col items-center  xs-mx:w-full xs-mx:flex-row  xs-mx:items-end xs-mx:justify-start  xs-mx:gap-6  gap-2'>
                    <Button component={Link} to={'/apply-job'} variant="light" color='brightSun.4'
                            className=' mt-5 ml-3 rounded-lg  '>{edit ? "Edit" :"Apply"}</Button>
                    {
                        edit ? <Button  variant="outline" color="red.5" size="sm">Delete</Button> :<IconBookmark stroke={2} className='cursor-pointer text-bright-sun-400 '/>
                    }
                </div>
            </div>

            <Divider color={'mineShaft.5'} className={'my-4'}/>
            <div className='flex  justify-between sm-mx:gap-8 sm-mx:flex-wrap'>
                {card.map((item, index) => (
                    <div key={index} className={'flex flex-col items-center gap-1'}>
                        <ActionIcon variant="light" className='!h-10 !w-10 xs-mx:!h-8 xs-mx:!w-8' color={'brightSun.4'} aria-label="Settings">
                            <item.icon className={'w-7 h-7'} stroke={1.5}/>
                        </ActionIcon>
                        <p className='text-sm text-mine-shaft-300'>{item.name}</p>
                        <p className='font-semibold'>{item.value}</p>
                    </div>
                ))}
            </div>
            <div className='my-10   '>
                <h2 className='text-xl mb-5 font-semibold xs-mx:text-lg'>Required Skills</h2>
                <div className='flex gap-4 flex-wrap'>
                    {
                        skills.map((item) => (
                            <div key={item}
                                 className="text-sm   bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 rounded-2xl py-1 px-2">
                                {item}
                            </div>

                        ))
                    }
                </div>
            </div>
            <div
                className="[&_h4]:text-mine-shaft-200 [&_h4]:text-lg [&_h4]:fotn-semibold [&_h4]:my-4 [&_p]:text-justify [&_li]:marker:text-bright-sun-400"
                dangerouslySetInnerHTML={{__html: data}}>

            </div>

            <div>
                <div className='text-xl mb-5 font-semibold xs-mx:text-lg'>About Company</div>
                <div className={'flex justify-between  flex-row xs-mx:flex-col xs-mx:gap-2'}>

                    <div className={'flex items-center gap-3'}>

                        <div className='bg-mine-shaft-800 rounded-xl p-3'>
                            <img src={`icons/Microsoft.png`} alt={'img'} className='h-10 w-10'/>
                        </div>
                        <div className="">
                            <p className='text-semibold text-mine-shaft-200 text-xl'>Software Engineer</p>
                            <p className='text-xs text-mine-shaft-300'>20k+ Employees</p>
                        </div>


                    </div>
                    <Button component={Link} to={'/company'} variant="light" color='brightSun.4' className='  rounded-lg'>Visit Company Page</Button>

                </div>
                <div className={'text-justify mt-2 text-sm'}>
                    Google is a multinational technology company and one of the world's leading organizations in internet-related services and products. It was founded on September 4, 1998, by Larry Page and Sergey Brin while they were pursuing their Ph.D. at Stanford University. Google is headquartered in Mountain View, California, also known as the Googleplex.
                </div>
            </div>

        </div>


    </>
}

export default JobsDesc