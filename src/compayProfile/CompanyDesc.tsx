import {IconBriefcase, IconMapPin} from "@tabler/icons-react";
import {Avatar, Button, Tabs} from "@mantine/core";
import AboutCompany from "./AboutCompany.tsx";
import CompanyJob from "./CompanyJob.tsx";
import CompanyEmployee from "./CompanyEmployee.tsx";

const CompanyDesc=()=>{
   return(
       <div  className='w-[75%] py-3 px-3'>
         <div className='relative'>
           <img src='company_cover.png' alt={'cover'} className='rounded-t-xl '/>
           <img src='companies/Microsoft.png' alt={'image'} className=' h-36 w-36 rounded-lg absolute -bottom-16 left-6 '/>
         </div>
         <div className='mt-20 flex justify-between items-start  mx-2'>
           <div className='flex flex-col justify-center ml-4'>
             <p className='text-semibold text-mine-shaft-200 text-xl'>Microsoft</p>

             <div className='flex text-sm text-mine-shaft-300 items-cneter gap-2'>
               <IconMapPin className='h-4 w-4'/> New York,United States
             </div>

           </div>
           <div>
               <Avatar.Group>
                   <Avatar src="avatar.png" />
                   <Avatar src="avatar1.png" />
                   <Avatar src="avatar2.png" />
                   <Avatar src="avatar.png" />

                   <Avatar>+5k</Avatar>
               </Avatar.Group>

           </div>

         </div>
           <div className="mt-10">
               <Tabs defaultValue="about"  variant="pills" radius="sm" >
                   <Tabs.List className=" [&_button]:font-semibold">
                       <Tabs.Tab value="about"> About</Tabs.Tab>
                       <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
                       <Tabs.Tab value="employees">Employees</Tabs.Tab>
                   </Tabs.List>

                   <Tabs.Panel value="about">
                       <AboutCompany/>
                   </Tabs.Panel>
                   <Tabs.Panel value="jobs">
                       <CompanyJob/>
                   </Tabs.Panel>
                   <Tabs.Panel value="employees">
                       <CompanyEmployee/>
                   </Tabs.Panel>
               </Tabs>
           </div>
       </div>
   )
  }
  export  default  CompanyDesc