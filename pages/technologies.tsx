import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'

const Technologies = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>{NAME}'s Stack</title>
        </Head>
        <Container>
          <Intro title="Technologies." subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit.." />
        </Container>
      </Layout>
    </>
  )
}

export default Technologies