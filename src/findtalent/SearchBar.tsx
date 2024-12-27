import MultiInput from "../findJobs/MultiInput.tsx";
import {searchFields} from "../Data/FindTalentData.tsx";
import {IconUserCircle} from "@tabler/icons-react";
import {Button, Collapse, Input} from "@mantine/core";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";

const SearchBar=()=>{
    const [opened, { toggle }] = useDisclosure(false);
    const matches = useMediaQuery('(max-width: 476px)');

    return(<div className=" pt-10 px-10">
        <div className="flex justify-end">
            {matches && <Button onClick={toggle} variant='outline' color='brightSun.5' className="">Filter</Button>}
        </div>

        <Collapse in={(opened || !matches)}>
            <div className={'grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5  gap-3 '}>

                <div className='flex gap-1 items-center'>
                    <div className="bg-mine-shaft-800 text-bright-sun-400 p-1 mr-1 rounded-full">
                        <IconUserCircle stroke={2}/>
                    </div>
                    <Input variant="unstyled" placeholder="Talent Name"
                           className='[&_input]:!placeholder-mine-shaft-300'/>
                </div>
                {
                    searchFields.map((item, index) => (
                        <div  key={index}>
                            <MultiInput {...item}/>
                        </div>
                    ))
                }
            </div>
        </Collapse>

    </div>)
}
export default SearchBar