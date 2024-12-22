import MultiInput from "./MultiInput.tsx";

import {IconBriefcase, IconMapPin, IconRecharging, IconSearch} from "@tabler/icons-react";



const SearchBar=()=>{
    const dropdownData = [
        {
            title: "Job Title",
            icon: IconSearch,
            options: [
                "Designer",
                "Developer",
                "Product Manager",
                "Marketing Specialist",
                "Data Analyst",
                "Sales Executive",
                "Content Writer",
                "Customer Support"
            ]
        },
        {
            title: "Location",
            icon: IconMapPin,
            options: [
                "Delhi",
                "New York",
                "Kathmandu",
                "San Francisco",
                "London",
                "Berlin",
                "Tokyo",
                "Sydney",
                "Toronto"
            ]
        },
        {
            title: "Experience",
            icon: IconBriefcase,
            options: [
                "Entry Level",
                "Intermediate",
                "Expert"
            ]
        },
        {
            title: "Job Type",
            icon: IconRecharging,
            options: [
                "Full Time",
                "Part Time",
                "Contract",
                "Freelance",
                "Internship"
            ]
        },
        {
            title: "Salary",
            icon: IconRecharging,
            options: [
                "10000",
                "10000-20000",
                "20000-30000",
                "30000-40000",
                "40000-50000"
            ]
        }
    ];

    return(<div className={'grid grid-cols-2 xs:grid-cols-3 gap-3'}>
        {
            dropdownData.map((item,index)=>(
                <div className={'w-[17%]  xs:w-[60%]'} key={index}>
                    <MultiInput {...item}/>
                </div>
            ))
        }

    </div>)
}
export  default  SearchBar