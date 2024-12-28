
const CertCard=()=>{
    return(<>
        <div className={'flex  items-center justify-between xs-mx:flex-wrap xs-mx:gap-3  '}>
            <div className={'flex items-center gap-3'}>
                <img src={`icons/Google.png`} alt={'img'} className='h-8 w-8'/>
                <div className="">
                    <p className='text-semibold text-mine-shaft-200'>{'Software Engineer'}</p>
                    <p className='text-xs text-mine-shaft-300'>Google </p>
                </div>
            </div>
            <div className='flex items-end flex-col xs-mx:flex-row xs-mx:gap-2'>
                <p className=" text-mine-shaft-300">Jan 2024</p>
                <p className="text-mine-shaft-300">ID:12HSH656544</p>
            </div>

        </div>

    </>)
}
export default CertCard