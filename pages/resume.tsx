import React, {useState} from "react"
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import cn from "classnames"

const base = cn(`px-6 py-3 w-1/2 w-auto justify-center justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 tracking-wide md:tracking-widest text-lg md:text-xl rounded-t`)

interface IPart {
  title: string;
  sections: string[][];
}

const EXP :IPart = {title: "Experience!", sections: [["React", "Awesome"], ["React", "Awesome"], ["React", "Awesome"], ["React", "Awesome"]]}
const SKILL :IPart = {title: "Tech Stack!", sections: [["Golang", "Beautiful"], ["Golang", "Beautiful"], ["Golang", "Beautiful"], ["Golang", "Beautiful"]]}
const EDU :IPart = {title: "Education!", sections: [["Education", "is the only way to a future."], ["Education", "is the only way to a future."], ["Education", "is the only way to a future."]]}

const maperinho = (el:IPart) => {
  return(
    <div>
      <h1>{el.title}</h1>
      {el.sections.map(e => 
      (
      <>
        <h3>{e[0]}</h3>
        <p>{e.slice(1)}</p>
      </>
      )
      )}
    </div>
  )
}

const Resume = () => {
  const [useSection, setSection] = useState(0)
  
  return (
    <>
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
                  <p className='pl-2 inline-flex'>Experience</p>
                </a>
                <a onClick={()=>setSection(1)} className={useSection == 1 ? cn(base, 'border-yellow-500 bg-black text-yellow-500') : base}>
                    <p className='pl-2 inline-flex'>Tecnology</p>
                </a>
                <a onClick={()=>setSection(2)} className={useSection == 2 ? cn(base, 'border-yellow-500 bg-black text-yellow-500') : base}>
                    <p className='pl-2 inline-flex'>Education</p>
                </a>
              </div>
              <div className="bg-black">
                {useSection === 0 ? maperinho(EXP) : useSection === 1 ? maperinho(SKILL) : maperinho(EDU)}
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default Resume