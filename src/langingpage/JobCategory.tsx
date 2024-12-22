import {Carousel} from "@mantine/carousel";
import {JobCategories} from "../data.tsx";

const JobCategoryPage=()=>{
    return(<>
        <div className="max-w-screen-lg mt-10  mx-auto mb-10">
            <div className="text-4xl  font-semibold text-center text-mine-shaft-200 mb-2">Browse <span
                className="text-bright-sun-400">Job </span>Category
            </div>
            <div className=" text-lg  mb-5 text-center  mx-auto text-mine-shaft-300">Explore diverse job opportunities tailored to your skills.Start your career journey today!</div>

                <Carousel
                    height={250}
                    slideSize="25%"
                    slideGap="sm"
                    loop
                    align="start"
                    controlsOffset="md"
                    className="[&_button]:bg-bright-sun-300 [&_button]:border-none mb-10 "
                >{
                    JobCategories.map((jobCategory,index)=><Carousel.Slide>
                            <div key={index} className='  border  border-bright-sun-400 p-3 rounded-xl flex flex-col items-center mt-5 mb-2 hover:cursor-pointer  hover:shadow-[0_0_5px_2px_black] !shadow-bright-sun-300 transaction  duration-300 ease-in-out'>
                                <div>
                                    {jobCategory?.icon}
                                </div>
                                <div className='mt-5 flex flex-col gap-1 items-center mb-2 '>
                                    <div className='text-mine-shaft-100 text-xl font-semibold'>{jobCategory?.title}</div>
                                    <div className='text-mine-shaft-300  text-center '>{jobCategory?.description}</div>
                                    <div className='text-bright-sun-200 font-semibold'>{jobCategory?.jobsPosted}</div>
                                </div>
                            </div>
                        </Carousel.Slide>)
                    }

                </Carousel>

        </div>
    </>)
}
export default JobCategoryPage