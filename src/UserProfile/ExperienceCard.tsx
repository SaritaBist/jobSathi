import {Button} from "@mantine/core";
import {useState} from "react";
import ExpInput from "./ExpInput.tsx";


const ExperienceCard=(props:any)=>{
    const [edit,setEdit]=useState(false)

    return(<>
        {
            edit?<><ExpInput setEdit={setEdit}/></>: <>
                <div className={'flex  items-center justify-between  '}>
                    <div className={'flex items-center gap-3'}>
                        <img src={`icons/Google.png`} alt={'img'} className='h-8 w-8'/>
                        <div className="">
                            <p className='text-semibold text-mine-shaft-200'>{'Software Engineer'}</p>
                            <p className='text-xs text-mine-shaft-300'>Google &#x2022;  New York,United state</p>
                        </div>
                    </div>
                    <p className="text-xs text-mine-shaft-300">Jan 2024 - Present</p>
                </div>
                <div className="text-xs text-mine-shaft-300 text-justify mt-4">As a Software Engineer at Microsoft, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.        </div>
                {
                    props.edit  && < div className="flex gap-2 mt-2">
                        <Button  onClick={()=>setEdit(true)} variant="outline" color='brightSun.4' className=''>Edit</Button>
                        <Button variant="light" color='red.4' className=''>Delete</Button>
                    </div>
                }
            </>
        }
</>)
}
export default ExperienceCard