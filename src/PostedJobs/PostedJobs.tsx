import {Tabs} from "@mantine/core";
import PostedJobsCard from "./PostedJobsCard.tsx";
import {activeJobs} from "../Data/PostedJobData.tsx";

const PostedJobs=()=>{
    return(<div className="px-4 mt-6 ">
        <div className="text-2xl font-semibold text-mine-shaft-50 mb-5"> Jobs</div>
            <Tabs  autoContrast variant="pills"  radius="md" defaultValue="active" className="[&_button[aria-selected='false']]:bg-mine-shaft-800 font-medium">
                <Tabs.List>
                    <Tabs.Tab value="active">Active[6]</Tabs.Tab>
                    <Tabs.Tab value="draft">Draft[2]</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="active">
                    <div className="flex gap-5 flex-col mt-5">
                        {
                            activeJobs.map((job)=>(
                              <PostedJobsCard job={job}/>
                            ))
                        }
                    </div>
                </Tabs.Panel>
                <Tabs.Panel value="draft">
                    <div className="flex gap-5 flex-col mt-5">
                        {
                            activeJobs.slice(0,2).map((job) => (
                                <PostedJobsCard job={job}/>
                            ))
                        }
                    </div>
                </Tabs.Panel>
            </Tabs>

        </div>
    )
}
export default PostedJobs