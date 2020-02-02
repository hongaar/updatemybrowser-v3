import React from 'react'
import { graphql } from 'gatsby'
import { Container, SEO } from '../components'
import { Layout } from '../containers'
import { SanitySite } from '../gqlTypes'
import { useSiteQuery } from '../queries'

type Props = {
  data: {
    site: SanitySite
  }
}

export default function() {
  const site = useSiteQuery()

  return (
    <Layout>
      <SEO title={'Welcome...'} />
      <Container>
        <h1 hidden>Welcome to {site.title}</h1>
      </Container>
    </Layout>
  )
}
