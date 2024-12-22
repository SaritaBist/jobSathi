import {Avatar, TextInput} from "@mantine/core";
import {IconSearch} from "@tabler/icons-react";

const FindDreamJobPage=()=>{
    return(< div className="w-[100%]">
        <div className="flex items-center  px-16 ">
            <div className=" w-[45%] flex flex-col gap-6">
                <div className="text-6xl text-mine-shaft-100">
                    Find your <span className="text-bright-sun-400 leading-tight">dream job</span> with us
                </div>
                <div className="text-mine-shaft-100 text-xl  ">
                  Good life begins with good company.Start explore Thousands
                    of jobs in one place
                </div>
                <div className="flex  gap-4  items-center mt-4">
                   <div className="flex gap-4">
                       <TextInput
                           className="bg-mine-shaft-700 rounded-lg px-2 py-1 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                           variant="unstyled"
                           label="Job Title"
                           placeholder="Frontend Developer"
                       />
                       <TextInput
                           className="bg-mine-shaft-700 rounded-lg px-2 py-1 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                           variant="unstyled"
                           label="Job Type"
                           placeholder="Full Time"
                       />
                   </div>
                    <div>
                        <IconSearch stroke={2}  className="w-16 h-16 bg-bright-sun-400 text-mine-shaft-100 p-1 rounded-lg cursor-pointer hover:bg-bright-sun-500"/>
                    </div>
                </div>
            </div>

            <div className="w-[55%] flex items-center justify-center">
                <div className="w-[28rem]  " >
                    <img src='Boy.png' alt={"image"}/>
                    <div className=" w-fit border border-bright-sun-400   absolute top-[50%]  right-16 p-3 rounded-lg  backdrop-blur-md">
                        <div className="text-lg text-mine-shaft-100 mb-2">10k+ got job</div>
                        <Avatar.Group>
                            <Avatar src="avatar.png" />
                            <Avatar src="avatar1.png" />
                            <Avatar src="avatar2.png" />
                            <Avatar>+5k</Avatar>
                        </Avatar.Group>
                    </div>

                    <div className="flex  gap-2 w-fit border border-bright-sun-400  absolute top-[35%] right-[32%] p-3 rounded-lg  backdrop-blur-md ">
                      <div>
                         <img src={'/google.jpg'} alt={'Goole image'} className=" w-12 h-12 rounded-lg"/>
                      </div>
                      <div className="flex gap-1 flex-col  text-mine-shaft-100">
                         <div>Software Engineer</div>
                          <div>
                              New Work
                          </div>
                      </div>

                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export  default FindDreamJobPage