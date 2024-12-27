import {IconBrandBebo, IconX} from "@tabler/icons-react";
import { IconBell } from '@tabler/icons-react';
import {Link} from "react-router-dom";
import { Burger, Button, Drawer, Indicator} from "@mantine/core";
import Navbar from "./Navbar.tsx";
import {useDisclosure} from "@mantine/hooks";
import ProfileMenu from "./ProfileMenu.tsx";

const links=[
    {name:'Home',path:'/'},
    {name:'Find Jobs',path:'/find-jobs'},
    {name:'Find Talent',path:'/find-talent'},
    {name:'Post Jobs',path:'/post-jobs'},
    {name:'Job History',path:'/job-history'},


]
const HeaderPage=()=>{
    const [opened, { open, close }] = useDisclosure(false);
    return(
        <div className="w-[100%] ">
        <div className=" sticky top-0  z-10  bg-mine-shaft-950 h-16 text-white flex justify-between px-10 items-center ">
           <div className="flex  gap-1 items-center">
               <IconBrandBebo  className="text-bright-sun-400 h-10 w-10 md:h-8 md:w-8"/>
                 <div className="xs-mx:hidden text-2xl text-bright-sun-400">jobSathi</div>
           </div>
            {<Navbar/>}

            <div className="flex gap-3  items-center">
                <Button component={Link} to={'/signup'} variant='filled' size="xs" autoContrast className="bs-mx:!hidden text-bright-sun-400 ">SignUp</Button>

                <ProfileMenu/>
                {/*<div className="p-1.5 bg-mine-shaft-800 rounded-full">*/}
                {/*    <IconSettings stroke={1.5}/>*/}
                {/*</div>*/}
                <div className="p-1.5 bg-mine-shaft-800 rounded-full">
                    <Indicator color="brightSun.4" size={8} processing offset={5}>
                    <IconBell stroke={1.5} />
                    </Indicator>
                </div>
                <Burger  className="bs:hidden " opened={opened} onClick={open} aria-label="Toggle navigation" />
            </div>

        </div>
        <Drawer position="left" size="xs" closeButtonProps={{icon: <IconX size={30} stroke={1.5}/>}}
                 opened={opened} onClose={close} title="">
            <div className="flex flex-col  h-full items-center gap-6">
                {
                    links.map(link => (
                        <div key={link.name}
                             className={`  flex items-center    `}>
                            <Link to={link.path} className="hover:text-bright-sun-400 text-lg">
                                {link.name}
                            </Link>
                        </div>
                    ))
                }
                <Button component={Link} to={'/signup'} variant='filled' size="xs" className=" bs-mx:hidden text-bright-sun-400 ">SignUp</Button>

            </div>
        </Drawer>
    </div>)
}
export default HeaderPage