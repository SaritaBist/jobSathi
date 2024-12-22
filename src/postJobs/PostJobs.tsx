import {fields} from "../Data/PostJobData.tsx";
import SelectInput from "./MultiSelectInput.tsx";
import {Button, TagsInput} from "@mantine/core";
import TextEditor from "./TextEditor.tsx";
import {IconArrowLeft} from "@tabler/icons-react";
import {Link} from "react-router-dom";

const PostJobs=()=>{
      const  input=fields
return<div className="mx-24 py-10">
      <div className="text-2xl font-semibold text-mine-shaft-50">Post a Job</div>
      <form>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
           <SelectInput {...input[0]}/>
           <SelectInput {...input[1]}/>
         <SelectInput {...input[2]}/>
         <SelectInput {...input[3]}/>
         <SelectInput {...input[4]}/>
         <SelectInput {...input[5]}/>
         <TagsInput
             label="Skills"
             placeholder="Enter Skills"
             clearable
             splitChars={[',', ' ', '|']}
         />
     </div>
          <div className=' font-semibold mt-5' >Job Description</div>
          <TextEditor/>
          <div className='flex '>
              <Button  variant="light"  color='brightSun.4'  className=' mt-5 ml-3'>Publish Job</Button>
              <Button  variant="outline"  color='brightSun.4'  className=' mt-5 ml-3'>Save as Draft</Button>

          </div>
      </form>
</div>

}
export  default  PostJobs