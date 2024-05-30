import React from 'react'
import proj1 from '../assests/pro/bb1.png'
import proj2 from '../assests/pro/music1.png'
import proj3 from '../assests/pro/tms.png'
import proj4 from '../assests/pro/fruitveg.jpg'
import proj5 from '../assests/pro/chess.jpeg'
import proj6 from '../assests/pro/dam-monitoring.png'
const Projects = () => {
  return (
    <div class='py-6 max-w-[1200px] mx-auto' id='projects'>
      <div class='mx-auto px-4 md:px-8'>
        <div class='mb-4 flex items-center justify-between gap-8'>
          <div class='flex flex-col gap-4'>
            <h2 class="text-2xl lg:text-3xl text-white">
              My <span>Projects</span>
            </h2>

            <p class="text-gray-500">
              These are my latest projects
            </p>
          </div>
        </div>
        
        <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:gap-6 xl:gap-8">

          <a href="https://github.com/vignesh5743/BloodBank-Analysis" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
            <img src={proj1} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>


          <a href="/" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
            <img src={proj2} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          </a>

          <a href="https://github.com/vignesh5743/Travel-Management-system" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
            <img src={proj3} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          </a>


          <a href="https://github.com/vignesh5743/AI-BASED-TOOL-FOR-FRUITS-VEGETABLES-CLASSIFICATION" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
            <img src={proj4} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>

          <a href="https://github.com/vignesh5743/Chess-DataStructure" class="group h-48 overflow-hidden rounded-lg shadow-lg md:h-80">
            <img src={proj5} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>

          <a href="https://github.com/vignesh5743/Dam-Monitoring-System" class="group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80">
            <img src={proj6} alt="" class="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
          </a>


        </div>

      </div>



    </div>
  )
}

export default Projects