import React, {useState} from "react"
import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'

const Resume = () => {
  const [useVariable, setVariable] = useState(0)

  const base = `px-6 py-3 w-1/2 w-auto justify-center 
  justify-start border-b-2 title-font font-medium inline-flex items-center 
  leading-none border-gray-200 tracking-wide md:tracking-widest text-lg md:text-xl`
  
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
                <a onClick={()=>setVariable(0)} className={useVariable == 0 ? base + ' border-yellow-500 rounded-t bg-black text-yellow-500' : base}>
                    <p className='pl-2 inline-flex'>Experience</p>
                </a>
                <a onClick={()=>setVariable(1)} className={useVariable == 1 ? base + ' border-yellow-500 rounded-t bg-black text-yellow-500' : base}>
                    <p className='pl-2 inline-flex'>Tecnology</p>
                </a>
                <a onClick={()=>setVariable(2)} className={useVariable == 2 ? base + ' border-yellow-500 rounded-t bg-black text-yellow-500' : base}>
                    <p className='pl-2 inline-flex'>Education</p>
                </a>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default Resume
// working menu from another project, for reference.
// {useVariable >= 2 ? useVariable == 2 ? maperinho(C) : maperinho(D) : useVariable == 0 ? maperinho(A) : maperinho(B) }
// const maperinho = (el) => {
//   return el.map(e => {
//     return (
//       <div className="grid" key={e}>
//         <h3 className='mt-4 m-auto font-serif italic font-bold tracking-tighter leading-none text-4xl text-red-700'>{e[0]}</h3>
//         <p className='m-auto font-mono tracking-tighter '>{e[1]}</p>
//         <div className='w-10/12 m-auto grid grid-cols-1 lg:grid-cols-2'>
//           {e[2].map(ea => {
//               if(Array.isArray(ea.price)){
//                 return <PizzaCard key={ea.name + ea.content} name={ea.name} content={ea.content} price={ea.price}/>
//               }
//               return <Card key={ea.name + ea.content} name={ea.name} content={ea.content} price={ea.price}/>
//             })
//           }
//         </div>
//       </div>
//     )
//   });
// }