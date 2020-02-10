// First, we must import the schema creator
// @ts-ignore
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
// @ts-ignore
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import {
  blockContent,
  figure,
  localeString,
  localeText,
  satisfies
} from './schema/partials'
import {
  site,
  upgradable,
  matcher,
  sourceCanIUse,
  sourceWikipedia,
  sourceWhatIsMyBrowser,
  updater
} from './schema/documents'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',

  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // Partials
    blockContent,
    figure,
    localeText,
    localeString,
    satisfies,

    // DOcuments
    site,
    upgradable,
    matcher,
    updater,
    sourceWikipedia,
    sourceCanIUse,
    sourceWhatIsMyBrowser

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
