import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  preSlug: string
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  preSlug,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage preSlug={preSlug} slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/${preSlug}/${slug}`} href={`/${preSlug}/[slug]`}>
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}

export default PostPreview
