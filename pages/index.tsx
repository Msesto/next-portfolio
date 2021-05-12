import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Head from 'next/head'
import { NAME } from '../lib/constants'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title> {NAME}'s Portfolio</title>
        </Head>
        <Container>
          <Intro title="Me." subtitle="HOOMAN" />
          <h1>Hi</h1>
        </Container>
      </Layout>
    </>
  )
}

export default Index