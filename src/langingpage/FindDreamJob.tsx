import {Avatar, Button, TextInput} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const FindDreamJobPage = () => {
    return (
        <div className="w-full">
            <div className="flex flex-col lg:flex-row items-center px-4 lg:px-16">

                <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
                    <div className="text-4xl md:text-6xl text-mine-shaft-100 mt-5 md:mt-0">
                        Find your{" "}
                        <span className="text-bright-sun-400 leading-tight">
                            dream job
                        </span>{" "}
                        with us
                    </div>
                    <div className="text-mine-shaft-100 text-base md:text-xl">
                        Good life begins with good company. Start exploring
                        thousands of jobs in one place.
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6  mt-4">
                        <div className="flex flex-col sm:flex-row gap-4 ">
                            <TextInput
                                className="bg-mine-shaft-700 rounded-lg px-2 py-1 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                                variant="unstyled"
                                label="Job Title"
                                placeholder="Frontend Developer"
                            />
                            <TextInput
                                className="bg-mine-shaft-700 rounded-lg px-2 py-1 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
                                variant="unstyled"
                                label="Job Type"
                                placeholder="Full Time"
                            />
                        </div>
                        <div>
                            <IconSearch
                                stroke={2}
                                className="w-12 h-12 bs-mx:hidden  lg:w-16 lg:h-16 bg-bright-sun-400 text-mine-shaft-100 p-2 rounded-lg cursor-pointer hover:bg-bright-sun-500"
                            />
                            <Button variant='filled' size={'xs'} fullWidth className="bs:!hidden ">Search</Button>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
                    <div className="w-full max-w-xs md:max-w-md relative">
                        <img src="Boy.png" alt="image" className="w-full" />

                        <div className="w-fit border border-bright-sun-400 absolute top-[60%]  md:top-[40]  right-[2%] md:right-16 p-3 rounded-lg backdrop-blur-md">
                            <div className="text-sm md:text-lg text-mine-shaft-100 mb-2">
                                10k+ got job
                            </div>
                            <Avatar.Group>
                                <Avatar src="avatar.png" />
                                <Avatar src="avatar1.png" />
                                <Avatar src="avatar2.png" />
                                <Avatar>+5k</Avatar>
                            </Avatar.Group>
                        </div>

                        <div className="flex gap-2 w-fit border border-bright-sun-400 absolute top-[30%] right-[50%] md:top-[35%] md:right-[32%] p-3 rounded-lg backdrop-blur-md">
                            <img
                                src="/google.jpg"
                                alt="Google logo"
                                className="w-8 h-8 md:w-12 md:h-12 rounded-lg"
                            />
                            <div className="flex flex-col text-sm md:text-base text-mine-shaft-100">
                                <div>Software Engineer</div>
                                <div>New York</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDreamJobPage;
