import React from 'react'

import {FaGithubSquare,FaInstagram,FaLinkedin,FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div class="mt-12 w-max-[800px] border-t border-gray-500 text-center">
        <p class="my-5 text-gray-500">Sivakasi - 626123 <br />TamilNadu</p>
        <div class="inline-flex text-gray-500 gap-4 text-3xl">
            <a href="https://www.linkedin.com/in/hariharanvignesh2003/">
            <FaLinkedin />
            </a>
            <a href="https://github.com/vignesh5743">
            <FaGithubSquare/>
            </a>
            <a href="https://www.instagram.com/vignesh_.57/">
            <FaInstagram/>
            </a>
            
            <a href="mailto:hariharanvignesh2003@gmail.com" >
            <FaEnvelope  />
            </a>
            
        </div>

    </div>
  )
}

export default Footer