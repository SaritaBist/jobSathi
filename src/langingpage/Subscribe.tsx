import {Button, TextInput} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";

const Subscribe=()=>{
    const matches = useMediaQuery('(max-width: 516px');
return(
    <div className="mt-20 bg-mine-shaft-800 mx-10 xs-mx:mx-4 p-4 xs-mx:p-2 rounded-xl flex flex-col md:flex-row  justify-around ">
      <div className="text-2xl md:text-3xl  lg-text-4xl w-full  md:w-[40%] font-semibold text-center text-mine-shaft-100 mb-2">Never Want's to Miss Any   <span
        className="text-bright-sun-400">Job News ?</span>
      </div>
       <div className="flex  flex-row gap-1 bg-mine-shaft-600 rounded-xl items-center justify-between  xsm-mx:flex-col  px-3">
         <TextInput
            placeholder="Your@gmail.com"
            variant='unstyled'
            size= {matches?'lg':'ms'}
            className="[&_input]:text-mine-shaft-100 "
         />
         <Button variant="filled"  size={matches ?"sm":'md'} className="!rounded-lg xsm-mx:mb-1 " color='brightSun.4'>Subscribe</Button>
      </div>

</div>)
}
export default Subscribe