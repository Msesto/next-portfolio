import React, {useState} from "react"
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import cn from "classnames"

const maperinho = (el:string[]) => {
  return(
    <h1>{el[0]}</h1>
  )
}

const Resume = () => {
  const [useSection, setSection] = useState(0)

  const A :string[] = ["Experience!"]
  const B :string[] = ["Tech Stack!"]
  const C :string[] = ["Education!"]

  const base = cn(`px-6 py-3 w-1/2 w-auto justify-center justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 tracking-wide md:tracking-widest text-lg md:text-xl rounded-t`)
  
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
              <div className="flex mx-auto mb-10">
                <a onClick={()=>setSection(0)} className={useSection == 0 ? cn(base, 'border-yellow-500 bg-black text-yellow-500') : base}>
                    <p className='pl-2 inline-flex'>Experienc</p>
                </a>
                <a onClick={()=>setSection(1)} className={useSection == 1 ? cn(base, 'border-yellow-500 bg-black text-yellow-500') : base}>
                    <p className='pl-2 inline-flex'>Tecnolog</p>
                </a>
                <a onClick={()=>setSection(2)} className={useSection == 2 ? cn(base, 'border-yellow-500 bg-black text-yellow-500') : base}>
                    <p className='pl-2 inline-flex'>Educatio</p>
                </a>
              </div>
              {useSection === 0 ? maperinho(A) : useSection === 1 ? maperinho(B) : maperinho(C)}
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default Resume