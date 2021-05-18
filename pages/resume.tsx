import React, {useState} from "react"
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import cn from "classnames"
import Tab from "../components/resume-tab"
import { FaBook, FaBriefcase, FaKeyboard } from "react-icons/fa"
import {IPart, EXP, SKILL, EDU} from "../lib/constants"

const base = cn(`px-6 py-3 w-1/2 w-auto justify-center justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 tracking-wide md:tracking-widest text-lg md:text-xl rounded-t`)

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