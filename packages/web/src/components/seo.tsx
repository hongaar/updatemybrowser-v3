import React from 'react'
import Helmet, { HelmetProps } from 'react-helmet'
import { useSiteQuery } from '../queries/site'

type Props = {
  title: string
  description?: string
  meta?: HelmetProps['meta']
}

export function SEO({ title, description = '', meta = [] }: Props) {
  const lang = 'en'
  const site = useSiteQuery()
  const metaDescription = description || site.description[lang]

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={title === site.title ? '%s' : `%s | ${site.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: title
        },
        {
          name: 'twitter:description',
          content: metaDescription
        }
        // @ts-ignore
      ].concat(meta)}
    />
  )
}
