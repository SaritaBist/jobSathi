import {works} from "../data.tsx";
import {Avatar} from "@mantine/core";


const Working=()=>{
return<div >
    <div className="text-4xl  font-semibold text-center text-mine-shaft-200 mb-2 intersect:motion-preset-expand">How it <span
        className="text-bright-sun-400">Works</span>
    </div>
    <div className=" text-lg  mb-5 text-center  mx-auto text-mine-shaft-300 intersect:motion-preset-expand">Explore diverse job opportunities
        Effortlessly navigate through the process and land your dream job
    </div>
    <div className="flex  flex-col md:flex-row justify-between items-center ">
        <div className="relative  intersect:motion-translate-x-in-[-49%] intersect:motion-translate-y-in-[-4%] motion-ease-spring-smooth motion-duration-2000" >
            <img src='Girl.png' alt="girl image" className="w-full md:max-w-xl"/>
            <div className="  flex  flex-col  items-center absolute  top-[20%] right-8 border border-bright-sun-400 w-fit p-2 rounded-lg backdrop-blur-md">
                <Avatar src='avatar1.png' size={50}/>
                <p className="text-mine-shaft-200 w-[7em] text-center font-bold">Complete Your profile</p>
                <p className="text-mine-shaft-300">70% completed</p>
            </div>
        </div>
        <div className="xs-mx:px-4 intersect:motion-translate-x-in-[49%]   intersect:motion-translate-y-in-[4%]   motion-ease-spring-smooth motion-duration-2000">
            {
                works.map((item)=><div className="flex  gap-3 pr-2 md:pr-20 mt-10  ">
                        {item?.icon}
                        <div>
                            <div className="text-mine-shaft-200 text-2xl font-semibold xs-mx:text-xl">{item?.title}</div>
                            <div className="text-mine-shaft-300 mt-1 text-lg">{item?.description}</div>
                        </div>
                    </div>)
            }
        </div>
    </div>

</div>
}
export default Working