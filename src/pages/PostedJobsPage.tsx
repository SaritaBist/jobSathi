import PostedJobs from "../PostedJobs/PostedJobs.tsx";
import PostedJobDesc from "../PostedJobs/PostedJobDesc.tsx";
import {Button, Drawer} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";


const PostedJobsPage=()=>{
    const [opened, { open, close }] = useDisclosure(false);

    const matches = useMediaQuery('(max-width: 900px)');
    return<div className="min-h-[100vh]  bg-mine-shaft-900  font-['poppins'] py-2 px-4 ">
        {
            matches && <Button  size='sm' variant="filled" autoContrast onClick={open} className="mt-4"   >
                All Jobs
            </Button>
        }
        <div className='flex gap-6 '>
           <div className="bs-mx:hidden"><PostedJobs/></div>
            <PostedJobDesc/>
        </div>
        <Drawer  size={'xs'} opened={opened} onClose={close} >
            <PostedJobs/>
        </Drawer>
    </div>

}
export default PostedJobsPage