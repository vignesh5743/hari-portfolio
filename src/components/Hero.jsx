import React from "react";
import profilepic from "../assests/profilepic5.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram ,AiOutlineMail  } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  return (
    <div>
      <div className="max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row 
                        justify-center align-center" id="home">
      <div className="flex-col my-auto mx-auto md:mx-0">
        <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-200">Hi! I am Hariharanvignesh</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            <TypeAnimation
            sequence={[
                "Full Stack Dev",
                1000,
                "Student",
                1000,
                "Tech Enthusiast",
                1000,
                
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}/>
        </h1>
        <div className="flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl font-bold  text-gray-500 ">Fresher</p>
        </div>
        <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600">
        <a href="https://www.linkedin.com/in/hariharanvignesh2003/">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/vignesh5743">
          <AiFillGithub />
        </a>
        <a href="https://www.instagram.com/vignesh_.57/">
          <AiFillInstagram />
        </a>
        <a href="mailto:hariharanvignesh2003@gmail.com">
          <AiOutlineMail />
        </a>
        </div>
        <div className="relative inline-flex group my-3">
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a href="/Resume2_1.pdf" title="Download cv" role="button" class="w-[190x] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Download CV</a>
        </div>
    </div>

        <div className="my-auto">
          <img
            className="w-[300px] sm:w-[500px] mx-auto h-auto rounded-full"
            src={profilepic}
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
