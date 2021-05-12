import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  preSlug?: string
  slug?: string
}

const CoverImage = ({ title, src, slug, preSlug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/${preSlug}/${slug}`} href={`/${preSlug}/[slug]"`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
