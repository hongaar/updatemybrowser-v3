import { useStaticQuery, graphql } from 'gatsby'
import { SanitySite } from '../gqlTypes'

export function useSiteQuery() {
  const domain = 'updatemybrowser.org'
  const data = useStaticQuery(graphql`
    query {
      site: sanitySite(domain: { eq: "updatemybrowser.org" }) {
        title
        domain
        description {
          en
          nl
        }
        color {
          hex
          alpha
        }
      }
    }
  `)

  return data.site as SanitySite
}
