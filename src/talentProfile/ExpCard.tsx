
const ExpCard=()=>{
    return(<>
        <div className={'flex  items-center justify-between  '}>
            <div className={'flex items-center gap-3'}>
                <img src={`icons/Google.png`} alt={'img'} className='h-8 w-8'/>
                <div className="">
                    <p className='text-semibold text-mine-shaft-200'>{'Software Engineer'}</p>
                    <p className='text-xs text-mine-shaft-300'>Google &#x2022;  New York,United state</p>
                </div>
            </div>
            <p className="text-xs text-mine-shaft-300">Jan 2024 - Present</p>
        </div>
        <div className="text-xs text-mine-shaft-300 text-justify mt-4">

            As a Software Engineer at Google, I specialize in building scalable and high-performance applications. My expertise lies in integrating front-end and back-end technologies.
        </div>
    </>)
}
export default ExpCard