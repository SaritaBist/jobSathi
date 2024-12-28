import SelectInputt from "./SelectInput.tsx";
import fields from "../Data/ProfileData.tsx";
import {Button, Checkbox, Textarea} from "@mantine/core";
import {useState} from "react";
import {MonthPickerInput} from "@mantine/dates";

const ExpInput=(props:any)=>{
    const  input=fields
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(new Date());
    const [checked, setChecked] = useState(false);
    const [jobDesc,setJobDesc]=useState('As a Software Engineer at Google, I am responsible for designing, developing, and maintaining scalable software solutions that enhance user experience and improve operational efficiency. My role involves collaborating with cross-functional teams to define project requirements, develop technical specifications, and implement robust applications using cutting-edge technologies. I actively participate in code reviews, ensuring adherence to best practices and coding standards, and contribute to the continuous improvement of the development process.')

    return(
        <div className="flex flex-col gap-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <SelectInputt {...input[0]}/>
                <SelectInputt {...input[1]}/>
            </div>
            <SelectInputt {...input[2]}/>
            <Textarea
                autosize
                minRows={3}
                label={"Summary"}
                placeholder="Enter  summary of your experience"

                value={jobDesc}
                onChange={(event) => setJobDesc(event.currentTarget.value)}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <MonthPickerInput
                    label="Start date"
                    maxDate={endDate || undefined}
                    placeholder="Pick date"
                    value={startDate}
                    onChange={setStartDate}
                />
                <MonthPickerInput
                    label="End date"
                    disabled={checked}
                    minDate={startDate || undefined}
                    placeholder="Pick date"
                    value={endDate}
                    onChange={setEndDate}
                />
            </div>
            <Checkbox
                label={"I'm Currently Working Here"}
                autoContrast
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
            />
            < div className="flex gap-2 mt-2">
                <Button  onClick={()=>props.setEdit(false)} variant="outline" color='brightSun.4' className=''>Save</Button>
                <Button onClick={()=>props.setEdit(false)} variant="light" color='red.4' className=''>Cancel</Button>
            </div>
        </div>
    )
}
export default ExpInput