import React, { useState } from 'react'

import { Layout as BaseLayout } from '../components'
import { useSiteQuery } from '../queries'

export function Layout(props) {
  const site = useSiteQuery()

  return <BaseLayout {...props} siteTitle={site.title} />
}
