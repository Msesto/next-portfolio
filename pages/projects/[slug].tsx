import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getProjectBySlug, getAllProjects } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import ProjectType from '../../types/project'

type Props = {
  project: ProjectType
  moreProjects: ProjectType[]
  preview?: boolean
}

const Project = ({ project, moreProjects, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {project.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                <meta property="og:image" content={project.ogImage.url} />
              </Head>
              <PostHeader
                title={project.title}
                coverImage={project.coverImage}
                date={project.date}
                author={project.author}
              />
              <PostBody content={project.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default Project

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const project = getProjectBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(project.content || '')

  return {
    props: {
      project: {
        ...project,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const projects = getAllProjects(['slug'])

  return {
    paths: projects.map((proj) => {
      return {
        params: {
          slug: proj.slug,
        },
      }
    }),
    fallback: false,
  }
}
