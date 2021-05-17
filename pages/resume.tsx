import React, {useState} from "react"
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import cn from "classnames"
import Tab from "../components/resume-tab"
import { FaBook, FaBriefcase, FaKeyboard } from "react-icons/fa"

const base = cn(`px-6 py-3 w-1/2 w-auto justify-center justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 tracking-wide md:tracking-widest text-lg md:text-xl rounded-t`)

interface IPart {
  title: string;
  sections: string[][];
}

const EXP :IPart = {title: "Log of every professional job I had and a summary of each.", 
  sections: [
    ["Web Developer, Freelance.", "Great"],
    ["SUR Analyst, OSPLAD.", "Awesome"], 
    ["Tech Support, NewCar Group.", "Awesome"],
]}
const SKILL :IPart = {title: "Log of every technology I've learnt and used, from most experienced to least.", 
  sections: [
    ["JavaScript/TypeScript", "Beautiful"], 
    ["React", "Beautiful"],
    ["NodeJS", "Beautiful"],
    ["Golang", "Beautiful"],
    ["NextJS", "Beautiful"], 
    ["NoSQL (MongoDB)", "Beautiful"],
    ["SQL (PostgreSQL)", "Beautiful"],
    ["Git/GitHub/GitLab", "Beautiful"], 
    ["AWS", "Beautiful"],
    ["Python", "Beautiful"],
    ["Linux", "Beautiful"], 
    ["Bash", "Beautiful"],
]}
const EDU :IPart = {title: "Log of every course I've done, from most serious to chilled workshops and books.", 
  sections: [
    ["Informatics Engineering, University of Buenos Aires", "is the only way to a future."], 
    ["FullStack Open, University of Helsinki", "is the only way to a future."], 
    ["Epic React, Kent C. Dodds.", "is the only way to a future."],
    ["Introduction to Computer Science using Python, MITx", "is the only way to a future."], 
    ["Python for Data Science, Dataquest.io", "is the only way to a future."],
    ["Front-End Certification, FreeCodeCamp", "is the only way to a future."], 
    ["Professional Path, FrontEnd Masters", "is the only way to a future."],

    ["How To Code in Go, Digital Ocean", "is the only way to a future."],
    ["Learning Go, Jon Bodner, O'Reilly", "is the only way to a future."],
    ["Full Stack Serverless, Nader Dabit, O'Reilly", "is the only way to a future."],
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