import {Button, TextInput} from "@mantine/core";

const Subscribe=()=>{
return(<div className="mt-20 bg-mine-shaft-800 mx-20 p-4 rounded-xl flex  justify-around ">
    <div className="text-4xl  w-[40%] font-semibold text-center text-mine-shaft-100 mb-2">Never Want's to Miss Any   <span
        className="text-bright-sun-400">Job News ?</span>
    </div>
    <div className="flex gap-4 bg-mine-shaft-600 rounded-xl items-center  px-3">
        <TextInput
            placeholder="Your@gmail.com"
            variant='unstyled'
            size='lg'
            className="[&_input]:text-mine-shaft-100 "
        />
        <Button variant="filled"  size='md' className="!rounded-lg" color='brightSun.4'>Subscribe</Button>
    </div>

</div>)
}
export default Subscribe