import {Tabs} from "@mantine/core";

import JobsDesc from "../jobsDesc/JobsDesc.tsx";
import {talents} from "../Data/FindTalentData.tsx";
import TalentCard from "../findtalent/TalentCard.tsx";

const PostedJobDesc=()=>{
    return(
        <div className="px-4 mt-6 w-[70%]  bs-mx:w-full">
            <div className="text-2xl font-semibold text-mine-shaft-100 xs-mx:text-lg">Software Engineer</div>
            <div className=" text-mine-shaft-300">New York,United States</div>
            <div className="mt-10">
                <Tabs defaultValue="overview"  radius="sm">
                    <Tabs.List className=" [&_button]:!text-lg font-semibold xsm-mx:[&_button]:!text-xs " >
                        <Tabs.Tab value="overview"> Overview</Tabs.Tab>
                        <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
                        <Tabs.Tab value="invited">Invited</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="overview" className="[&>div]:w-full">
                     <JobsDesc edit/>
                    </Tabs.Panel>
                    <Tabs.Panel value="applicants">
                        <div className='flex flex-wrap gap-4 justify-around mt-8'>
                            {
                                talents.map((talent, index) => (
                                    <TalentCard key={index} talent={talent} schedule/>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                    <Tabs.Panel value="invited">
                        <div className='flex flex-wrap gap-4 around mt-8'>
                            {
                                talents.map((talent, index) => (
                                    <TalentCard key={index} talent={talent}  invited/>
                                ))
                            }
                        </div>
                    </Tabs.Panel>
                </Tabs>
            </div>

        </div>
    )
}
export default PostedJobDesc