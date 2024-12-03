import Marquee from "react-fast-marquee";
import {Companies} from "../data.tsx";

const CompaniesPage=()=>{
   return(<>
       <div className="text-4xl mt-6  font-semibold text-center text-mine-shaft-200 mb-2">Trusted By <span className="text-bright-sun-400">1000+</span>Companies</div>
       <Marquee pauseOnHover>
           {
              Companies.map(company => (<div className='mt-3'>
                  <img  className=" h-20 w-40 m-4  rounded-xl hover:bg-mine-shaft-900 cursor-poiter mt-10" src={`companies/${company}.png`} alt={'company'}/>
              </div>))
           }
       </Marquee>

   </>)
  }
  export  default CompaniesPage