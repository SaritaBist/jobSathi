import MultiInput from "../findJobs/MultiInput.tsx";
import {searchFields} from "../Data/FindTalentData.tsx";
import {IconUserCircle} from "@tabler/icons-react";
import {Input} from "@mantine/core";

const SearchBar=()=>{
    return(<>
        <div className={'flex gap-2 pt-10 justify-around'}>
            <div className='flex gap-1 items-center'>
                <div  className="bg-mine-shaft-800 text-bright-sun-400 p-1 mr-1 rounded-full">
                    <IconUserCircle stroke={2} />
                </div>
                <Input variant="unstyled" placeholder="Talent Name"  className='[&_input]:!placeholder-mine-shaft-300'/>
            </div>
            {
                searchFields.map((item, index) => (
                    <div className={'w-[17%]'} key={index}>
                        <MultiInput {...item}/>
                    </div>
                ))
            }

        </div>
    </>)
}
export default SearchBar