import {works} from "../data.tsx";
import {Avatar} from "@mantine/core";


const Working=()=>{
return(<div >
    <div className="text-4xl  font-semibold text-center text-mine-shaft-200 mb-2">How it <span
        className="text-bright-sun-400">Works</span>
    </div>
    <div className=" text-lg  mb-5 text-center  mx-auto text-mine-shaft-300">Explore diverse job opportunities
        Effortlessly navigate through the process and land your dream job
    </div>
    <div className="flex justify-between items-center">
        <div className="relative" >
            <img src='Girl.png' alt="girl image" className=" max-w-xl"/>
            <div className="  flex  flex-col  items-center absolute  top-[20%] right-6 border border-bright-sun-400 w-fit p-2 rounded-lg backdrop-blur-md">
                <Avatar src='avatar1.png' size={50}/>
                <p className="text-mine-shaft-200 w-[7em] text-center font-bold">Complete Your profile</p>
                <p className="text-mine-shaft-300">70% completed</p>
            </div>
        </div>
        <div className="">
            {
                works.map((item)=>(
                    <div className="flex  gap-3 pr-20 mt-10">
                        {item?.icon}
                        <div>
                            <div className="text-mine-shaft-200 text-2xl font-semibold">{item?.title}</div>
                            <div className="text-mine-shaft-300 mt-1 text-lg">{item?.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>

</div>)
}
export default Working