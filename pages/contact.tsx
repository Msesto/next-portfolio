import React, { useState } from "react"
import axios from "axios"
import cn from "classnames"
import Layout from "../components/layout"
import Container from '../components/container'
import Head from 'next/head'
import Intro from "../components/intro"

interface IStatus {
  submitting: boolean;
  status?: { ok: boolean; msg: string};
}

const Contact = () => {

  const [serverState, setServerState] = useState<IStatus>({
    submitting: false,
    status: undefined
  })

  const handleServerResponse = (ok:boolean, msg:string, form:HTMLFormElement) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  }

  const handleOnSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: "https://getform.io/f/4bae35e4-0284-4650-b24a-3e830d38f0ac",
      data: new FormData(form as HTMLFormElement)
    })
      .then(r => {
        handleServerResponse(true, "Thank, I will back to you soon!", form as HTMLFormElement )
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form as HTMLFormElement )
      })
  }

  return (
    <Layout>
      <Head>
          <title> Contact Form </title>
      </Head>
      <Container>
        <Intro title="Contact form." subtitle={`If the form isn't working, email me at:`} innerHTML={['select-all cursor-pointer', '<em>sesto@outlook.com</em>']} />
         <section className="mb-20">
          <h3 className={cn`mt-6 leading-tight text-3xl`}>Submit a contact form</h3>
          <p className={cn`ml-4 leading-none font-light text-sm`}>If the form isn't working, email me at: <span className={cn`select-all cursor-pointer`}><em>sesto@outlook.com</em></span></p>
          <form className={cn`items-center flex flex-col`} onSubmit={handleOnSubmit}>
            <div className={cn`w-2/3 flex-shrink-0 mt-2`}>
              <label className={cn`mt-12 block text-lg font-medium`}>Email address:</label>
              <input className={cn`text-lg md:mt-1 text-gray-700 p-2 rounded w-full`} type="email" name="email" placeholder="JuanDoe@example.com" required={true} />
            </div>
            <div className={cn` w-2/3 flex-shrink-0 mt-2`}>
              <label className={cn`mt-6 block text-lg font-medium`}>Name:</label>
              <input className={cn`text-lg md:mt-1 text-gray-700 p-2 rounded w-full`} type="text" name="name" placeholder="Juan Doe" required={true} />
            </div>
            <div className={cn`w-2/3 flex-shrink-0 mt-2`}>
              <label className={cn`mt-6 block text-lg font-medium`}>Message:</label>
              <textarea className={cn`text-lg md:mt-1 text-gray-700 mb-1 md:mb-4 h-24 p-2 rounded w-full`} name="message" placeholder="Enter your message"></textarea>
            </div>
              <button className={cn`p-2 w-1/3 text-2xl md:text-4xl font-medium text-white rounded-md border border-white bg-accent-3 mt-6`} type="submit" disabled={serverState.submitting}>
                Submit
              </button>
            {serverState.status && (<p className={!serverState.status.ok ? "errorMsg" : ""}>{serverState.status.msg}</p>)}
          </form>
        </section>
      </Container>
    </Layout>
  )
}

export default Contact