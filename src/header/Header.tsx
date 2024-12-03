import {IconBrandBebo, IconSettings} from "@tabler/icons-react";
import { IconBell } from '@tabler/icons-react';
import {Link} from "react-router-dom";
import {Avatar, Indicator} from "@mantine/core";
import Navbar from "./Navbar.tsx";

const HeaderPage=()=>{
    return(<>
        <div className="w-full bg-mine-shaft-950 h-16 text-white flex justify-between px-10 items-center">
           <div className="flex  gap-1 items-center">
               <IconBrandBebo  className="text-bright-sun-400 h-8 w-8"/>
                 <div className="text-2xl">jobSathi</div>
           </div>
            {<Navbar/>}
            <div className="flex gap-5  items-center">

                <div className="flex items-center gap-2 ">
                    <div>Sarita</div>
                    <Avatar src='woman.png' alt='image'/>

                </div>
                <div className="p-1.5 bg-mine-shaft-800 rounded-full">
                    <IconSettings stroke={1.5}/>
                </div>
                <div className="p-1.5 bg-mine-shaft-800 rounded-full">
                    <Indicator color="brightSun.4" size={8} processing offset={5}>
                    <IconBell stroke={1.5} />
                    </Indicator>
                </div>

            </div>
        </div>
    </>)
}
export default HeaderPage