import {IconKeyboard, IconReportMoney, IconTrendingUp, IconUser, IconUsersGroup} from "@tabler/icons-react";

export const Companies=["Amazon", "Google", "Figma","Microsoft","Netflix",'Oracle',"Spotify","Wallmart"]


export const JobCategories = [
    {
        icon:<IconKeyboard stroke={3} className='bg-bright-sun-400 w-10 h-10 p-2 rounded-full' />,
        title: "Data Entry",
        description: "Input data into systems accurately and efficiently",
        jobsPosted: "1k+ new jobs posted",
    },
    {
        icon: <IconUser stroke={3} className='bg-bright-sun-400 w-10 h-10 p-2 rounded-full' />,
        title: "Customer Support",
        description: "Assist customers with inquiries and issues",
        jobsPosted: "1.2k+ new jobs posted",
    },
    {
        icon: <IconTrendingUp stroke={3} className='bg-bright-sun-400 w-10 h-10  p-2 rounded-full' />,
        title: "Sales",
        description: "Sell products and services to customers",
        jobsPosted: "900+ new jobs posted",
    },
    {
        icon: <IconReportMoney stroke={3} className='bg-bright-sun-400 w-10 h-10 p-2 rounded-full' />,
        title: "Finance",
        description: "Manage financial records and transactions",
        jobsPosted: "700+ new jobs posted",
    },
    {
        icon: <IconUsersGroup stroke={3} className='bg-bright-sun-400 w-10 h-10 p-2 rounded-full' />,
        title: "Human Resources",
        description: "Recruit, manage, and support company employees",
        jobsPosted: "600+ new jobs posted",
    },
];
