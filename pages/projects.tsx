import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Hero from '../components/hero'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import Project from '../types/project'

type Props = {
  allProjects: Project[]
}

const Projects = ({ allProjects }: Props) => {
  const heroProject = allProjects[0]
  const moreProjects = allProjects.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title> {NAME}'s Projects</title>
        </Head>
        <Container>
          <Intro title="Projects." subtitle="My own, presentable, programming projects, some open source, a few not." />
          {heroProject && (
            <Hero
              title={heroProject.title}
              coverImage={heroProject.coverImage}
              date={heroProject.date}
              author={heroProject.author}
              preSlug={`projects`}
              slug={heroProject.slug}
              excerpt={heroProject.excerpt}
            />
          )}
          {moreProjects.length > 0 && <MoreStories posts={moreProjects} />}
        </Container>
      </Layout>
    </>
  )
}

export default Projects

export const getStaticProps = async () => {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allProjects },
  }
}