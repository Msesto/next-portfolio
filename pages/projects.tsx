import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroProject from '../components/hero-project'
import ProjectIntro from '../components/project-intro'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'
import Head from 'next/head'
import { NAME } from '../lib/constants'
import Project from '../types/project'

type Props = {
  allProjects: Project[]
}

const Index = ({ allProjects }: Props) => {
  const heroProject = allProjects[0]
  console.log(heroProject)
  const moreProjects = allProjects.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title> {NAME}'s Projects</title>
        </Head>
        <Container>
          <ProjectIntro />
          {heroProject && (
            <HeroProject
              title={heroProject.title}
              coverImage={heroProject.coverImage}
              date={heroProject.date}
              author={heroProject.author}
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

export default Index

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