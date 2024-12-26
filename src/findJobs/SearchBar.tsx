import MultiInput from "./MultiInput.tsx";

import {IconBriefcase, IconMapPin, IconRecharging, IconSearch} from "@tabler/icons-react";
import {useDisclosure, useMediaQuery} from "@mantine/hooks";
import {Button, Collapse} from "@mantine/core";



const SearchBar=()=>{
    const [opened, { toggle }] = useDisclosure(false);
    const matches = useMediaQuery('(max-width: 476px)');
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

    return(
        <div className=" pt-10 px-10">
            <div className="flex justify-end">
                {matches && <Button onClick={toggle} variant='outline' color='brightSun.5' className="" >Filter</Button>}
            </div>
            <Collapse in={(opened || !matches)}>
                <div className={'grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-3 '}>
                   {
                    dropdownData.map((item, index) => (
                        <div className={''} key={index}>
                            <MultiInput {...item}/>
                        </div>
                    ))
                    }

               </div>
                </Collapse>
        </div>
    )
}
export default SearchBar