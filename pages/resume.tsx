import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'

const Resume = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{NAME}'s Resume</title>
        </Head>
        <Container>
          <Intro title="Resume." subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.."  />
        </Container>
      </Layout>
    </>
  )
}

export default Resume