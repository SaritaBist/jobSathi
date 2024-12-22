import {companyData} from "../Data/Company.tsx";

const AboutCompany=()=>{
    const company:any =companyData
    return(
        <div className='mt-5'>
            {
                Object.keys(company).map((key,index)=>(
                    <div key={index} className={'mt-5'}>
                        <div className='text-xl font-semibold  '>{key}</div>
                        {
                            key !== 'Website' && <div className="text-sm  text-justify ">{key!=='Specialties'?company[key]:company[key].map((item)=>(
                                <span key={item}>&bull; {item}</span>
                            ))}</div>

                        }
                        {
                            key === 'Website' && <div className="text-sm  text-justify text-bright-sun-200 ">
                                <a href={company[key]} target='_blank'>{company[key]}</a>
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    )
}
export  default  AboutCompany