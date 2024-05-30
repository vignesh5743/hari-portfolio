import React from 'react'
import aboutImg from '../assests/about4.jpeg'
const About = () => {
  return (
    <div className='py-10 text-white bg-[#232325] h-auto ' id='about'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto'>

            <div>
                <div className='w-[400px] h-full'>
                    <img src={aboutImg} alt="" className='object-cover rounded-xl h-[300px] filter grayscale brightness-50'/>

                </div>
            </div>

            <div>
                <div className='p-2'>
                    <div className='text-gray-300 my-3'>
                        <h3 className='text-4xl font-semibold mb-5'>About <span className='primary-text'>Me</span></h3>
                        <p className='text-justify leading-7 w-11/12 mx-auto'>
                        Passionate and dedicated student specializing in Artificial Intelligence and Data Science, with a strong foundation in machine learning, statistical analysis, and data visualization. 
                        Enthusiastic about applying theoretical knowledge to practical problems, 
                        I am eager to contribute to innovative projects and further develop my skills in a dynamic and challenging environment.
                        </p>
                    </div>
                </div>

                <div className='flex mt-10 items-center gap-7'>
                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>10
                        <span >+</span>
                        </h3>
                        <p><span className='md:text-base text-xs'>Project</span></p>
                    </div>

                    <div className='bg-[#333333]/40 p-5 rounded-lg'>
                        <h3 className='md:text-4xl text-2xl font-semibold text-white'>15
                        <span >+</span>
                        </h3>
                        <p><span className='md:text-base text-xs'>Certification</span></p>
                    </div>

                </div>


            </div>


        </div>

    </div>
  )
}

export default About