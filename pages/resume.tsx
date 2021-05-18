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

// secont item in each section must be JSX, since the component consumes it as innerHTML (Security implications for this type of site are null).
const EXP :IPart = {title: "Log of every professional job I had and a summary of each.", 
  sections: [
    ["Web Developer, Freelance.", `
    <ul>
      <li> Working with TS/React and Golang </li>
      <li> Projects will be added to the projects page </li>
      <li> I'd like to add that working on random jobs has given me more troubleshooting skills </li>
     </ul>
     `],
    ["SUR Analyst, OSPLAD.", `
    <ul>
      <li> Administrative tasks, such as organizing all the billing for expensive medication, as well as auditing it, and making the files to send </li>
      <li> During the pandemic, I was the only one from my team to keep going and did my best to keep the flow, until my resignation </li>
      <li> Mainly got the gist of working with multiple teams of different types of professionals and be able to negotiate to reach a mutual ground </li>
     </ul>
    `], 
    ["Tech Support, NewCar Group.", `
    <ul>
      <li> Maintained the work computers, printers and installed AP to reach places that didn't have wi-fi </li>
      <li> Helped other employees to maximize their use of office software </li>
     </ul>
    `],
]}
const SKILL :IPart = {title: "Log of every technology I've learnt and used, from most experienced to least.", 
  sections: [
    ["JavaScript/TypeScript", "<p>The language I've most experience and knowledge of.</p>"], 
    ["React", "<p>Did over 100 hours of workshops about react, can make custom hooks, understand compound components and so on.</p>"],
    ["NodeJS", "<p>Mainly Express.JS to make CRUD API's, with MongoDB, JWT, and other middlewares.</p>"],
    ["Golang", "<p>This is what I've been spending most of my recent time on, right now I've a grab onto all Next, so most of my fron-end's are built using Next.</p>"], 
    ["NoSQL (MongoDB)", "<p>CRUD operations, also experience with Mongo's Atlas (their cloud offering).</p>"],
    ["SQL (PostgreSQL)", "<p>CRUD operations, still need to put more work to have a better understanding.</p>"],
    ["Git/GitHub/GitLab", "<p>Most of the basic principles, working on a GitLab certification at the moment.</p>"], 
    ["AWS", "<p>Did a serverless course using Amplify, experience with EC2, Route 53, Buckets, CloudFront and a few more services.</p>"],
    ["Python", "<p>Basic knowledge.</p>"],
    ["Linux", "<p>Basic knowledge, lately I've been developing on WSL2 for most of my work.</p>"], 
    ["Bash", "<p>Basic knowledge, mainly using ZSH.</p>"],
]}
const EDU :IPart = {title: "Log of every course I've done, from most serious to chilled workshops and books.", 
  sections: [
    ["Informatics Engineering, University of Buenos Aires", `
    <h3> 2019-2021 </h3>
    <p> Studied for a year and a half, and decided to change institution. </p>
    `], 
    ["FullStack Open, University of Helsinki", `
    <h3> 05/2020 - 07/2020 </h3>
    <p> The course that most impacted my path, making it more hands on and getting a taste for bug hunting, and problem solving. First complete app. </p>
    `],
    ["Epic React, Kent C. Dodds.", `
    <h3> 01/2021 - 04/2021 </h3>
    <p> Extremly in depth React course, elevated my knowledge of hooks, react patterns, testing, and more advanced topics. </p>
    `],
    ["Introduction to Computer Science using Python, MITx", `
    <h3> 08/2020 - 11/2020 </h3>
    <p> Felt like a university course, but twice the speed that I've done in the university, mainly algorithms and foundations of CS. </p>
    `],
    ["Python for Data Science, Dataquest.io", `
    <h3> 2019 </h3>
    <p> My first Python course, it was more involved with pandas and numpy than anything else. </p>
    `],
    ["Front-End Certification, FreeCodeCamp", `
    <h3> 2018 </h3>
    <p> My first experience with Web technology, completed it in my free time, mainly the html/css and JS foundations. </p>
    `],
    ["Professional Path, FrontEnd Masters", `
    <h3> 2020 </h3>
    <p> I Finished all the workshops from the beginner track and the professional track, all of them pretty usefull, the best ones were the JS from Kyle simpsons, pretty in depth about JS inner workings. </p>
    `],

    ["How To Code in Go, Digital Ocean", `
    <h3> 2021 </h3>
    <h6> Book </h6>
    <p> My first introduction to GoLang, basic language features and syntax. </p>
    `],
    ["Learning Go, Jon Bodner, O'Reilly", `
    <h3> 2021 </h3>
    <p> My second step into GoLang, review of basic features, and a more hands on explanation of GoLang code and best practices, inspired me to develop meliRIP. </p>
    `],
    ["Full Stack Serverless, Nader Dabit, O'Reilly", `
    <h3> 2020 </h3>
    <p> Completed the book, but did the excercises up until half of the book, then they were broken (no longer working) and it was too much effort to workaround all the errors. </p>
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