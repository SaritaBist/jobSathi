import {IconBookmark, IconBookmarkFilled, IconCalendarWeek, IconClockHour3} from "@tabler/icons-react";
import {Button, Divider, Text} from '@mantine/core';

const Cards=({job,applied,saved,offered,interviewing}:any)=>{
    return (
        <div
            className=' flex flex-col gap-3 w-72 bg-mine-shaft-700  p-3  rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-400 '>
            <div className={'flex  items-center justify-between '}>
                <div className={'flex items-center gap-3'}>
                    <img src={`icons/${job.company}.png`} alt={'img'} className='h-7 w-7'/>
                    <div className="">
                        <p className='text-semibold text-mine-shaft-200'>{job.title}</p>
                        <p className='text-xs text-mine-shaft-300'>{job.company} &#x2022; {job.applicants} applications</p>
                    </div>
                </div>
                {
                    saved ? <IconBookmarkFilled stroke={2} className='cursor-pointer text-bright-sun-400 '/> :<IconBookmark stroke={2} className='cursor-pointer '/>
                }
            </div>
            <div
                className='flex justify-around [&>p]:text-xs [&>p]:text-bright-sun-400 [&>p]:bg-mine-shaft-600 [&>p]:py-1 [&>p]:px-2  [&>p]:rounded-lg'>
                <p>{job.level}</p>
                <p>{job.type}</p>
                <p>{job.location}</p>
            </div>
            <Text lineClamp={3} className="!text-sm !text-mine-shaft-300 !text-justify">
                {job.description}
            </Text>
            <Divider size='xs' mx='md' color={'mineShaft.5'}/>
            <div className='flex justify-between'>
                <div className='font-semibold text-mine-shaft-200 text-sm'>
                    {job.salary}
                </div>
                <div className='flex text-xs text-mine-shaft-400 items-cneter gap-2'>
                    <IconClockHour3 className='h-4 w-4'/> {applied? "Aplied" :"Posted"} {job.daysAgo} days ago
                </div>
            </div>
            {
                 offered && <div className='flex gap-4'>
                    <Button variant="outline"  color='brightSun.4' fullWidth>Accept</Button>

                    <Button variant="light" color='brightSun.4' fullWidth>Reject</Button>

                </div>
            }
            {
                interviewing &&
                <div className="flex  items-center gap-2 text-xs text-mine-shaft-200"><IconCalendarWeek stroke={2} size={16} className="text-bright-sun-400"/>Mon,25,January &bull; <span className="text-mine-shaft-300">10:30</span></div>
            }

        </div>

    )
}
export default Cards;
