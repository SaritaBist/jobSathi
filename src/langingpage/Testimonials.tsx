import { testimonials } from "../data.tsx";
import { Avatar, Rating } from "@mantine/core";

const Testimonials = () => {
    return (
        <div className="mt-20 px-4">
            <div className="text-3xl md:text-5xl text-mine-shaft-100 text-center">
                What <span className="text-bright-sun-400 leading-tight">User</span> says about us?
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 mx-4 md:mx-10">
                {testimonials.map((item) => (
                    <div
                        key={item.name}
                        className="flex flex-col gap-3 border border-bright-sun-400 rounded-lg p-4"
                    >
                        <div className="flex gap-5">
                            <Avatar src={`${item.avatar}.png`} size="lg" />
                            <div>
                                <p className="text-mine-shaft-100 text-lg font-semibold">
                                    {item.name}
                                </p>
                                <Rating value={item.rating} readOnly />
                            </div>
                        </div>
                        <div className="text-mine-shaft-200">{item.review}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
