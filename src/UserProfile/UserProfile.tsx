import {IconBriefcase, IconDeviceFloppy, IconEdit, IconMapPin} from "@tabler/icons-react";
import {ActionIcon, Divider, FileButton, TagsInput, Textarea,} from "@mantine/core";
import SelectInputt from "./SelectInput.tsx";
import {useState} from "react";
import fields from "../Data/ProfileData.tsx";
import CertiCard from "./CertiCard.tsx";
import ExperienceCard from "./ExperienceCard.tsx";
import {useMediaQuery} from "@mantine/hooks";





const UserProfile=()=>{
    const [edit,setEdit]=useState([false,false,false,false,false])
    const aboutMe=" My name is Sarita Bist. I'm From Mahendrangar kanchanpur nepal.I have recently completed my Bachelor's in Computer Applications (BCA) from Janjyoti Multiple Campus mahendranagar. I have gained one year of hands-on experience as a Frontend Developer at Global Money Express (GME), a South Korean company.\n" +
        "                    I am proficient in JavaScript (ES6), React, Next.js, Redux, and styling libraries like Material UI. Additionally, I have knowledge of Bootstap,Rtk Query, TypeScript, Axios, and Sass. that's it."
    const [about, setAbout] = useState(aboutMe);
    const  input=fields

    const [skills,setSkills] = useState(["React JS","Next JS","HTML","CSS","Redux","TypeScript","JavaScript","RTk Query","Tailwind CSS","Material UI","Mantine UI","Oracle","MongoDb"])

    const handleEditClick=(index:number)=>{
        const edit2=[...edit]
        edit2[index]=!edit2[index]
        setEdit(edit2)

    }

    const matches = useMediaQuery('(max-width: 475px)');

    const [file, setFile] = useState<File | null>(null);
    console.log(file)
    return(
        <div  className='w-[95%] lg-mx:w-full  py-3 mx-auto px-3'>
            <div className='relative'>
                <FileButton onChange={setFile} accept="image/png,image/jpeg,image/jpg">
                    {(props) => <IconEdit stroke={1} size={matches ? "20":'25'}  className="text-bright-sun-400 absolute   right-10 top-6" {...props}/>}
                </FileButton>

                <img src='cover.png' alt={'cover'} className='rounded-t-xl xs-mx:h-16'/>
                <img src='avatar.png' alt={'avatar'} className=' h-36 w-36  md-mx:w-32 md-mx:h-32  sm-mx:w-28 sm-mx:h-28  xs-mx:w-24 xs-mx:h-24 xsm-mx:w-20 xsm-mx:h-20 rounded-full absolute -bottom-16 left-6  md-mx:-bottom-14 sm-mx:-bottom-10 xs-mx:-bottom-12 xsm-mx:-bottom-10 border-4 border-mine-shaft-800'/>

            </div>

            <div className=' mt-20 xs-mx:mt-14 flex justify-between    '>
                <div className='flex flex-col justify-center ml-4 w-full'>
                    <p className='text-semibold text-mine-shaft-200 text-xl'>Sarita Bist</p>
                    {
                        edit[0] ? <div className="flex flex-col  ">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                                <SelectInputt {...input[0]}/>
                                <SelectInputt {...input[1]}/>

                            </div>
                            <SelectInputt {...input[2]}/>
                        </div> : <>
                            <div className=' text-sm text-mine-shaft-300 flex gap-2'>
                                <IconBriefcase size={16}/> <p>Software Engineer &#x2022; Microsoft </p>
                            </div>
                            <div className='flex text-xs text-mine-shaft-300 items-cneter gap-2'>
                                <IconMapPin className='h-4 w-4'/> New York,United States
                            </div>
                        </>
                    }


                </div>


                <ActionIcon variant="subtle" aria-label="Settings" >
                    {edit[0] ? <IconDeviceFloppy  className="text-bright-sun-400" size={matches ? "20":'25'}
                                                 onClick={() => handleEditClick(0)}/> :
                        <IconEdit stroke={1} size={matches ? "20":'25'} className="text-bright-sun-400" onClick={() => handleEditClick(0)}/>}
                </ActionIcon>


            </div>
            <Divider color='mineShaft.6 ' size={'xs'} className="mt-2"/>
            <div className='mt-10 ml-4'>
                <h2 className='text-2xl xs-mx:text-xl mb-3 font-semibold flex justify-between'>About  <ActionIcon variant="subtle" aria-label="Settings">
                    {edit[1] ? <IconDeviceFloppy stroke={1.5} className="text-bright-sun-400" size={matches ? "20":'25'}
                                                 onClick={() => handleEditClick(1)}/> :
                        <IconEdit stroke={1}  size={matches ? "20":'25'} className="text-bright-sun-400" onClick={() => handleEditClick(1)}/>}
                </ActionIcon></h2>
                {
                    edit[1] ?  <Textarea
                            autosize
                            minRows={3}
                            value={about}
                            onChange={(event) => setAbout(event.currentTarget.value)}
                        />:
                        <div className="text-sm text-mine-shaft-300 text-justify">
                            {aboutMe}
                        </div>
                }

            </div>

            <Divider color='mineShaft.6 ' size={'xs'} className="mt-2" />
            <div className='mt-10 ml-4'>
                <h2 className='text-2xl  xs-mx:text-xl mb-3 font-semibold flex justify-between'>Skills <ActionIcon variant="subtle" aria-label="Settings">
                    {edit[2] ? <IconDeviceFloppy stroke={1.5} className="text-bright-sun-400" size={matches ? "20":'25'}
                                                 onClick={() => handleEditClick(2)}/> :
                        <IconEdit stroke={1} size={matches ? "20":'25'}  className="text-bright-sun-400" onClick={() => handleEditClick(2)}/>}
                </ActionIcon>
                </h2>
                <div className='flex gap-4 flex-wrap'>
                    {
                        edit[2]? <TagsInput  value={skills} onChange={setSkills} />:

                skills.map((skill) => (
                <div
                    key={skill}
                    className="text-sm   bg-bright-sun-300 bg-opacity-15 text-bright-sun-400 rounded-2xl py-1 px-3">
                    {skill}
                </div>
                ))

                    }

                </div>
            </div>

            <Divider color='mineShaft.6 ' size={'xs'} className="mt-2"/>
            <div className='mt-10 ml-4'>
                <h2 className='text-2xl  xs-mx:text-xl mb- 3font-semibold flex justify-between'>Experience
                    <ActionIcon variant="subtle" aria-label="Settings">
                        {edit[3] ? <IconDeviceFloppy stroke={1.5} className="text-bright-sun-400" size={matches ? "20":'25'}
                                                     onClick={() => handleEditClick(3)}/> :
                            <IconEdit stroke={1}  size={matches ? "20":'25'} className="text-bright-sun-400" onClick={() => handleEditClick(3)}/>}
                    </ActionIcon>
                </h2>
                <div   className="my-5">
                    <ExperienceCard  edit={edit[3]}/>
                </div>
            </div>

            <Divider color='mineShaft.6 ' size={'xs'} className="mt-2" />
            <div className='mt-10 ml-4'>
                <h2 className='text-2xl  xs-mx:text-xl  mb- 3font-semibold flex justify-between'>Certifications
                    <ActionIcon variant="subtle" aria-label="Settings">
                        {edit[0] ? <IconDeviceFloppy stroke={1.5} size={matches ? "20":'25'} className="text-bright-sun-400"
                                                     onClick={() => handleEditClick(0)}/> :
                            <IconEdit stroke={1}  size={matches ? "20":'25'} className="text-bright-sun-400" onClick={() => handleEditClick(0)}/>}
                    </ActionIcon>
                </h2>
                <div className="my-5">
                    <CertiCard/>
                </div>
                <div className="my-5">
                    <CertiCard/>
                </div>
            </div>
        </div>)

}


export default UserProfile