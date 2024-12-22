import {testimonials} from "../data.tsx";
import {Avatar, Rating} from "@mantine/core";

const Testimonials=()=>{
    return(<div className=" mt-20">
        <div className="text-5xl text-mine-shaft-100 text-center">
            What <span className="text-bright-sun-400 leading-tight">User</span> says about us ?
        </div>
        <div className="flex justify-evenly mt-8">
            {
              testimonials.map((item)=>(
                  <div className="flex flex-col gap-3 w-[23%] border border-bright-sun-400  rounded-lg px-3 py-1">
                      <div key={item.name} className={'flex  gap-5 '}>
                          <Avatar src={`${item.avatar}.png`}/>
                          <div className=" ">
                              <p className="text-mine-shaft-100 text-lg font-semibold">{item.name}</p>
                              <Rating value={item.rating}/>
                          </div>

                      </div>
                      <div className=" text-mine-shaft-200">{item.review}</div>
                  </div>
              ))
            }
        </div>

    </div>)
}
export default Testimonials