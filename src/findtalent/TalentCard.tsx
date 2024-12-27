import {IconCalendarWeek, IconHeart, IconMapPin} from "@tabler/icons-react";
import {Avatar, Button, Divider, Modal, Text} from '@mantine/core';
import {Link} from "react-router-dom";
import {useDisclosure} from "@mantine/hooks";


import {useRef, useState} from "react";

import {DateInput, TimeInput} from "@mantine/dates";


interface  Talent{
    name: string,
    role: string,
    company: string,
    skills: string[],
    description: string,
    salary: string,
    location: string,
    image: string


}

interface TalentCardProps {
    talent: Talent,
    schedule?: boolean,
    invited?: boolean,
}
const TalentCards:React.FC<TalentCardProps> = ({talent,schedule,invited})=>{
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<Date | null>(null);
    const ref = useRef<HTMLInputElement>(null);
    return(
        <>
            <div className=' flex flex-col bs-mx:w-full  xl-mx:w-[45%]  gap-3 w-96 bg-mine-shaft-700  py-3 px-4  rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-amber-400 '>
                <div className={'flex  items-center justify-between '}>
                    <div className={'flex items-center gap-3'}>
                        <Avatar src={`${talent.image}.png`} className=''/>
                        <div className="">
                            <p className='text-semibold text-mine-shaft-200 text-lg'>{talent.name}</p>
                            <p className='text-xs text-mine-shaft-300'>{talent.role} &#x2022; {talent.company} </p>
                        </div>
                    </div>
                    <IconHeart stroke={2} className='cursor-pointer '/>
                </div>
                <div
                    className='flex gap-4 [&>p]:text-xs [&>p]:text-bright-sun-400 [&>p]:bg-mine-shaft-600 [&>p]:py-1 [&>p]:px-2  [&>p]:rounded-lg'>
                    {
                        talent.skills.map((skill, index:number) => (
                            <p key={index}>{skill}</p>
                        ))
                    }

                </div>
                <Text lineClamp={3} className="!text-sm !text-mine-shaft-300 !text-justify">
                    {talent.description}
                </Text>
                <Divider size='xs' mx='md' color={'mineShaft.5'}/>
                {
                    invited ? <div className="flex  items-center gap-2 text-xs text-mine-shaft-300"> <IconCalendarWeek stroke={2} size={16}/> Interview: October 20, 2025 12:pm</div> : <div className='flex justify-between'>
                        <div className='font-semibold text-mine-shaft-200 text-sm'>
                            {talent.salary}
                        </div>
                        <div className='flex text-xs text-mine-shaft-300 items-cneter gap-2'>
                            <IconMapPin className='h-4 w-4'/> {talent.location}
                        </div>
                    </div>
                }
                <Divider size='xs' mx='md' color={'mineShaft.5'}/>
                {
                    !invited && <div className='flex gap-4'>
                        <Button variant="outline" component={Link} to='/talent-profile' color='brightSun.4'
                                fullWidth>Profile</Button>
                        {
                            schedule ? <Button variant="light" color='brightSun.4'
                                               onClick={() => open()}
                                               rightSection={<IconCalendarWeek stroke={2} size={16}/>}
                                               fullWidth>Schedule</Button> :
                                <Button variant="light" color='brightSun.4' fullWidth>Message</Button>
                        }
                    </div>
                }
                {
                    invited && <div className='flex gap-4'>
                        <Button variant="outline"  color='brightSun.4' fullWidth>Accept</Button>

                        <Button variant="light" color='brightSun.4' fullWidth>Reject</Button>

                    </div>
                }


            </div>
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div>
                    <DateInput
                        minDate={new Date()}
                        value={value}
                        onChange={setValue}
                        label="Date "
                        placeholder="Enter Date"
                    />
                    <TimeInput label="Time" ref={ref} placeholder="Enter time"
                               onClick={() => ref.current?.showPicker()}/>
                    <Button variant="light" fullWidth className="mt-2" autoContrast>Schedule</Button>
                </div>
            </Modal>
        </>

    )
}
export default TalentCards;
