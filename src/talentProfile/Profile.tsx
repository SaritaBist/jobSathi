import {IconBriefcase, IconMapPin} from "@tabler/icons-react";
import {Button, Divider} from "@mantine/core";
import ExpCard from "./ExpCard.tsx";
import CertCard from "./CertCard.tsx";

const Profile=()=>{
    return(
        <div  className='w-[70%] py-3 px-3'>
        <div className='relative'>
            <img src='cover.png' alt={'cover'} className='rounded-t-xl'/>
            <img src='avatar.png' alt={'avatar'} className=' h-36 w-36 rounded-full absolute -bottom-16 left-6 border-4 border-mine-shaft-800'/>
        </div>
        <div className='mt-20 flex justify-between  mx-2'>
            <div className='flex flex-col justify-center ml-4'>
                <p className='text-semibold text-mine-shaft-200 text-xl'>Sarita Bist</p>
                <div className=' text-sm text-mine-shaft-300 flex gap-2'>
                   <IconBriefcase size={16}/> <p >Software Engineer &#x2022; Microsoft </p>
                </div>
                <div className='flex text-xs text-mine-shaft-300 items-cneter gap-2'>
                    <IconMapPin className='h-4 w-4'/> New York,United States
                </div>

            </div>
            <Button variant="light" color='brightSun.4' >Message</Button>

        </div>
        <Divider color='mineShaft.6 ' size={'xs'} className="mt-2" />
        <div className='mt-10 ml-4'>
            <h2 className='text-2xl mb-3 font-semibold'>About</h2>
            <div   className="text-sm text-mine-shaft-300 text-justify">

                My name is Sarita Bist. I'm From Mahendrangar kanchanpur nepal.I have recently completed my Bachelor's in Computer Applications (BCA) from Janjyoti Multiple Campus mahendranagar. I have gained one year of hands-on experience as a Frontend Developer at Global Money Express (GME), a South Korean company.

                I am proficient in JavaScript (ES6), React, Next.js, Redux, and styling libraries like Material UI. Additionally, I have knowledge of Bootstap,Rtk Query, TypeScript, Axios, and Sass. that's it.
            </div>
        </div>

        <Divider color='mineShaft.6 ' size={'xs'} className="mt-2" />
        <div className='mt-10 ml-4'>
            <h2 className='text-2xl mb-3 font-semibold'>Skills</h2>
            <div className='flex gap-4 flex-wrap'>
                <div className="text-sm   bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 rounded-2xl py-1 px-3">
                    React js
                </div>
                <div className="text-sm   bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 rounded-2xl py-1 px-3">
                    Next Js
                </div>
                <div className="text-sm   bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 rounded-2xl py-1 px-3">
                   Redux
                </div>
                <div className="text-sm   bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 rounded-2xl py-1 px-3">
                  Html
                </div>
                <div className="text-sm   bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 rounded-2xl py-1 px-3">
                   Css
                </div>
            </div>
        </div>

        <Divider color='mineShaft.6 ' size={'xs'} className="mt-2" />
        <div className='mt-10 ml-4'>
            <h2 className='text-2xl mb- 3font-semibold'>Experience</h2>
            <div   className="my-5">
                <ExpCard/>
            </div>
        </div>

        <Divider color='mineShaft.6 ' size={'xs'} className="mt-2" />
        <div className='mt-10 ml-4'>
            <h2 className='text-2xl mb- 3font-semibold'>Certifications</h2>
            <div className="my-5">
                <CertCard/>
            </div>
            <div className="my-5">
                <CertCard/>
            </div>
        </div>
    </div>)

}
export default Profile