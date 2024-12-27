import {Tabs} from "@mantine/core";

import {jobList} from "../Data/FindjobsData.tsx";
import Cards from "./Card.tsx";

const JobHistory=()=>{
    return(
        <div className="mt-6 px-4 ">
            <div className="sm-mx:xl text-2xl font-semibold text-mine-shaft-50 mb-5"> Job History</div>
            <div className="mt-10">
                <Tabs defaultValue="applied" radius="sm">
                    <Tabs.List className="[&_button]:!text-lg font-semibold">
                        <Tabs.Tab value="applied"> Applied</Tabs.Tab>
                        <Tabs.Tab value="saved">Saved</Tabs.Tab>
                        <Tabs.Tab value="offered">Offered</Tabs.Tab>
                        <Tabs.Tab value="Interviewing">Interviewing</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="applied" className="[&>div]:w-full">
                        <div  className='flex flex-wrap xl-mx:justify-center gap-3 mt-8'>
                            {
                                jobList.map((job)=> (
                                    <Cards job={job} applied/>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="saved">
                        <div className='flex flex-wrap xl-mx:justify-center gap-3 mt-8'>
                            {
                                jobList.map((job) => (
                                    <Cards job={job} saved/>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="offered">
                        <div className='flex flex-wrap xl-mx:justify-center gap-3 mt-8'>
                            {
                                jobList.map((job) => (
                                    <Cards job={job} offered/>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="Interviewing">
                        <div className='flex flex-wrap xl-mx:justify-center gap-3 mt-8'>
                            {
                                jobList.map((job) => (
                                    <Cards job={job} interviewing/>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>

        </div>
    )
}
export default JobHistory