import {IconFileCv, IconKeyboard, IconReportMoney, IconTrendingUp, IconUser, IconUsersGroup} from "@tabler/icons-react";

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

export  const works=[
    {
        icon:<IconFileCv stroke={3} className='bg-bright-sun-400 w-12 h-12 p-2 rounded-full' />,
        title: "Build Your Resume",
        description: "Create a standout resume with your skills",

    },
    {
        icon:<IconFileCv stroke={3} className='bg-bright-sun-400 w-12 h-12 p-2 rounded-full' />,
        title: "Apply for job",
        description: "Find and apply for job that matches your skills",

    },
    {
        icon:<IconFileCv stroke={3} className='bg-bright-sun-400 w-12 h-12 p-2 rounded-full' />,
        title: "Get Hired",
        description: "Connect with employers and start your new job",

    },
]

export  const testimonials=[
    {
        avatar:"avatar",
        name: "Sarita Bist",
        review: "This job portal made job search easy and quick. Recommended to all job seekers!",
        rating:4
    },

    {
        avatar:"avatar1",
        name: "Bhuwan Pandey",
        review: "Found my dream job within a week! The application process was smooth.",
        rating:4.5
    },
    {
        avatar:"avatar2",
        name: "Puja Chand",
        review: "I secured a job offer within days of applying. Exceptional user experience and support.",
        rating:5
    },
    {
        avatar:"avatar1",
        name: "Deepak Pandey",
        review: "Highly efficient job portal with excellent resources. Helped me land a great position.",
        rating:4.5
    },
]
