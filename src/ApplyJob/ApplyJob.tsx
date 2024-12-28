import {Button, Divider, FileInput, NumberInput, rem, Textarea, TextInput,Notification} from "@mantine/core";
import {IconCheck, IconPaperclip} from "@tabler/icons-react";

import {useState} from "react";
import {useNavigate} from "react-router";

const ApplyJob=()=>{
    const [preview,setPreview]=useState(false)
     const [submitData,setSubmitData]=useState(false)
    const [second,setSecond]=useState(5)
    const navigate=useNavigate()
    const handlePreview=()=>{
        setPreview(!preview)
        window.scrollTo({top:0,behavior:'smooth'})
    }
    const handleSubmit=()=>{
        setSubmitData(true)
        let x=5
        setInterval(()=>{
            x--
            setSecond(x)
            if(x===0){
                navigate('/find-jobs')

            }
        },1000)



    }

    return<>
         <div className={'max-w-screen-md mt-6  mx-auto  ' }>
           <div className={'flex items-center gap-3 mb-5'}>
                <div className='bg-mine-shaft-800 rounded-xl p-3'>
                    <img src={`icons/Microsoft.png`} alt={'img'} className='h-10 w-10 xs-mx:h-8 xs-mx:w-8'/>
                </div>
                <div className="">
                    <p className='text-semibold text-mine-shaft-200  text-xl xs-mx:text-lg'>Software Engineer</p>
                    <p className='text-xs text-mine-shaft-300'>Microsoft &bull; 2 days ago &#x2022; 34
                        applications</p>
                </div>
           </div>
        <Divider color={'mineShaft.5'}/>
           <div className='mt-5'>
             <p className={'text-lg font-semibold xs-mx:font-medium'}>Submit Your Applications</p>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <TextInput
                      withAsterisk
                      label="Full Name"
                      placeholder="Enter Full Name"
                      readOnly={preview}
                      variant={preview?"unstyled":"default"}
                      className={`${preview? 'text-mine-shaft-300 font-semibold' :''}`}


                  />
                  <TextInput
                      withAsterisk
                      label="Email"
                      placeholder="Enter Your Email"
                      readOnly={preview}
                      variant={preview?"unstyled":"default"}
                      className={`${preview? 'text-mine-shaft-300 font-semibold' :''}`}

                  />
                  <NumberInput
                      withAsterisk
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      min={0}
                      max={10}
                      hideControls
                      readOnly={preview}
                      variant={preview?"unstyled":"default"}
                      className={`${preview? 'text-mine-shaft-300 font-semibold' :''}`}

                  />
                  <TextInput
                      withAsterisk
                      label="LinkedIn Url"
                      placeholder="Enter Your LinkedIn URL"
                      readOnly={preview}
                      variant={preview?"unstyled":"default"}
                      className={`${preview? 'text-mine-shaft-300 font-semibold' :''}`}

                  />
              </div>
              <div className='grid grid-cols-1 gap-4'>
                  <FileInput
                      leftSection={<IconPaperclip stroke={2} />}
                      label="Attach Your CV"
                      placeholder="Your CV"
                      readOnly={preview}
                      variant={preview?"unstyled":"default"}
                      className={`${preview? 'text-mine-shaft-300 font-semibold' :''}`}

                  />
                  <Textarea
                      placeholder="Write here.."
                      label="Cover Letter"
                      autosize
                      minRows={3}
                      readOnly={preview}
                      variant={preview?"unstyled":"default"}
                      className={`${preview? 'text-mine-shaft-300 font-semibold' :''}`}
                  />
                  {
                      !preview && <Button  onClick={handlePreview} variant="light" color='brightSun.4' className=' mb-4'>Preview</Button>
                  }
                  {
                      preview &&(<div className={'flex gap-12'}>
                          <Button  onClick={handlePreview} variant="light" color='brightSun.4' className='mb-4' fullWidth>Edit</Button>
                              <Button  onClick={handleSubmit}  variant="light" color='brightSun.4' className='mb-4' fullWidth>Submit</Button>

                          </div>
                          )
                  }
              </div>

           </div>

    </div>
        {/*<Notification className={`!border border-bright-sun-400 !fixed top-10 !left-[30%] transition duration-300 ease-in-out ${submitData ? 'translate-y-10':'-translate-y-20'} }`} closeButtonProps={{ 'aria-label': 'Hide notification' }}*/}
        {/*              icon={<IconCheck style={{ width: rem(20), height: rem(20) }} />} color="teal" title="Application Submitted Successfully" mt="md">*/}
        {/*    Redirecting to find job page in {second} sec...*/}
        {/*</Notification>*/}
    </>
}
export default ApplyJob