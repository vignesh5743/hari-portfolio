




import React from 'react'

const Timeline = () => {
  return (
    <div class="py-10 bg-[#232325]" id='timeline'>
        <h2 className='mb-8 text-3xl text-white text-center'>My <span>Timeline</span></h2>
        <div class='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>Degree</p>
            <p className='text-gray-400'>2021-present</p>
            <p className='text-gray-400'>B.Tech Artificial Intelligence and Data Science</p>
            <p className='text-gray-500'>
            Mepco Schlenk Engineering College
            Sivakasi, TamilNadu.
            CGPA: 7.66
            </p>
        </div>

        <div class="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

        <div class='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>HSC</p>
            <p className='text-gray-400'>May-2021</p>
            <p className='text-gray-500'>
            Valluvar Vidhyalaya Matric Hr.Sec School
            Srivilliputtur, TamilNadu
            Percentage: 89%
            </p>
        </div>

        <div class="h-[50px] w-[2px] bg-slate-400 relative my-1 mx-auto"></div>

        <div class='mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto'>
            <p>SSLC</p>
            <p className='text-gray-400'>May-2019</p>
            <p className='text-gray-500'>
            Valluvar Vidhyalaya Matric Hr.Sec School
            Srivilliputtur, TamilNadu
            Percentage: 83.8%
            </p>
        </div>


    </div>
  )
}

export default Timeline
