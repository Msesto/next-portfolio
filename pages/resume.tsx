import React, {useState} from "react"
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import cn from "classnames"
import Tab from "../components/resume-tab"
import { FaBook, FaBriefcase, FaKeyboard } from "react-icons/fa"
import {IPart, SKILL, EDU} from "../lib/constants"

const base = cn(`px-6 py-3 w-1/2 w-auto justify-center justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 tracking-wide md:tracking-widest text-lg md:text-xl rounded-t`)

const EXP :IPart = {title: "Log of every professional job I had and a summary of each.", 
  sections: [
    ["Web Developer, Freelance.", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2021 &rarr; </h4>
    <ul class="list-disc p-1 pl-3 text-sm md:text-lg">
      <li> Working with TS/React and Golang </li>
      <li> Projects will be added to the projects page </li>
      <li> I'd like to add that working on random jobs has given me more troubleshooting skills </li>
    </ul>
      `],
    ["SUR Analyst, OSPLAD.", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2018 - 2021 </h4>
    <ul class="list-disc p-1 pl-3 text-sm md:text-lg">
      <li> Administrative tasks, such as organizing all the billing for expensive medication, as well as auditing it, and making the files to send </li>
      <li> During the pandemic, I was the only one from my team to keep going and did my best to keep the flow, until my resignation </li>
      <li> Mainly got the gist of working with multiple teams of different types of professionals and be able to negotiate to reach a mutual ground </li>
    </ul>
    `], 
    ["Tech Support, NewCar Group.", `
    <h4 class="text-2xl font-bold text-white text-opacity-60"> 2017 - 2018 </h4>
    <ul class="list-disc p-1 pl-3 text-sm md:text-lg">
      <li> Maintained the work computers, printers and installed AP to reach places that didn't have wi-fi </li>
      <li> Helped other employees to maximize their use of office software </li>
    </ul>
    `],
]}

const maperinho = (el:IPart) => {
  return(
    <Tab title={el.title} sections={el.sections} />
  )
}

const Resume = () => {
  const [useSection, setSection] = useState(0)
  
  return (
      <Layout>
        <Head>
          <title>{NAME}'s Resume</title>
        </Head>
        <Container>
          <Intro title="Resume." subtitle="Find a summary of my life, the professional part."  />
          <section>
            <div className="container px-5 py-16 mx-auto flex flex-wrap flex-col">
              <div className="flex mx-auto">
                <a onClick={()=>setSection(0)} className={useSection == 0 ? cn(base, 'border-yellow-500 bg-black text-yellow-500') : base}>
                  <p className='hidden  md:block pl-2 inline-flex'>Experience</p>
                  <FaBriefcase className="md:hidden" />
                </a>
                <a onClick={()=>setSection(1)} className={useSection == 1 ? cn(base, 'border-yellow-500 bg-black text-yellow-500') : base}>
                    <p className='hidden  md:block pl-2 inline-flex'>Tecnology</p>
                    <FaKeyboard className="md:hidden" />
                </a>
                <a onClick={()=>setSection(2)} className={useSection == 2 ? cn(base, 'border-yellow-500 bg-black text-yellow-500') : base}>
                    <p className='hidden  md:block pl-2 inline-flex'>Education</p>
                    <FaBook className="md:hidden" />
                </a>
              </div>
              <div className="bg-black rounded-lg p-6">
                {useSection === 0 ? maperinho(EXP) : useSection === 1 ? maperinho(SKILL) : maperinho(EDU)}
              </div>
            </div>
          </section>
        </Container>
      </Layout>
  )
}

export default Resume