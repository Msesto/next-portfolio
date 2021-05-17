import React from "react"
import cn from "classnames"
import { css } from "@emotion/css"
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaHackerrank, FaInstagram } from "react-icons/fa"

const rIcons = css`
font-size: 2rem;
margin: 0.5rem;
`

const insta = css`
:hover{
  background: #f09433; 
  background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
  background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  border-radius: 4px;
}
`
const hRank = css`
:hover{
  color: #1BA94C;
}
`
const linkedIn = css`
:hover{
  color: #0072b1;
}
`
const twitter = css`
:hover{
  color: #00acee;
}
`

const Footer = () => {

  return (
    <>
      <footer className={cn`md:w-9/12 md:mx-auto mt-6 pt-6 flex-shrink-0 flex flex-no-wrap justify-around`}>
        <a href="https://twitter.com/11Sesto"><FaTwitterSquare className={cn`${[rIcons, twitter]}`} /></a>
        <a href="https://github.com/Msesto"><FaGithubSquare className={cn`${rIcons}`} /> </a>
        <a href="https://www.hackerrank.com/sesto?hr_r=1"><FaHackerrank className={cn`${[rIcons, hRank]}`} /></a>
        <a href="https://www.linkedin.com/in/martin-esteban-sesto/"><FaLinkedin className={cn`${[rIcons, linkedIn]}`} /></a>
        <a href="https://www.instagram.com/11sesto/"><FaInstagram className={cn`${[rIcons, insta]}`} /> </a>
      </footer>
      <p className={cn`text-xs mx-auto text-gray-400 mb-1`}>Developed by Martin Sesto, psst still under development</p>
    </>
  )
}

export default Footer