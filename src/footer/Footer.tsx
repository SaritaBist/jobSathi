import {IconBrandBebo, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin} from "@tabler/icons-react";



const Footer=()=>{

    const footerLinks = [
        {
            title: "Product",
            links: ["Find Job", "Find Company", "Find Employee"]
        },
        {
            title: "Company",
            links: ["About Us", "Contact Us", "Privacy Policy", "Terms & Conditions"]
        },
        {
            title: "Support",
            links: ["Help & Support", "Feedback", "FAQs"]
        }
    ];

    return(
        <div className="bg-mine-shaft-950 min-w-fit mx-auto pb-52 pt-4 font-['poppins'] ">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center px-4 sm:px-10 md:px-20 py-10   '>
                <div className="  flex flex-col gap-4 ml-20">
                    <div className="flex  gap-1 items-center cursor-pointer">
                        <IconBrandBebo className="text-bright-sun-400 h-8 w-8"/>
                        <div className="text-2xl text-mine-shaft-100">jobSathi</div>

                    </div>
                    <p className="text-mine-shaft-200">
                        Job portal with user profiles, skill updates, certifications, work experience and admin job
                        postings.
                    </p>
                    <div
                        className='flex gap-2 text-bright-sun-400 [&>div]:bg-mine-shaft-600 [&>div]:rounded-full [&>div]:p-2 '>
                        <div><IconBrandFacebook stroke={2}/></div>
                        <div><IconBrandLinkedin stroke={2}/></div>
                        <div><IconBrandInstagram stroke={2}/></div>
                    </div>
                </div>

                {
                    footerLinks.map((linkGroup) => (
                        <div key={linkGroup.title} className="">
                            <h3 className="text-xl text-bright-sun-400 ">{linkGroup.title}</h3>
                            <ul className="list-none">
                                {linkGroup.links.map((link) => (
                                    <li key={link}
                                        className="text-mine-shaft-200 py-1 cursor-pointer hover:text-bright-sun-400 hover:translate-x-2 transition duration-300 ease-in-out">
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default Footer