import S from '@sanity/desk-tool/structure-builder'
import {
  FaDesktop,
  FaMousePointer,
  FaLaptop,
  FaSearch,
  FaDownload
} from 'react-icons/fa'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Sites')
        .schemaType('site')
        .icon(FaDesktop)
        .child(S.documentTypeList('site').title('Sites')),
      S.divider(),
      S.listItem()
        .title('Browsers')
        .schemaType('upgradable')
        .icon(FaMousePointer)
        .child(
          S.documentTypeList('upgradable')
            .filter('category == $category')
            .params({ category: 'browser' })
            .title('Browsers')
        ),
      S.listItem()
        .title('Operating systems')
        .schemaType('upgradable')
        .icon(FaLaptop)
        .child(
          S.documentTypeList('upgradable')
            .filter('category == $category')
            .params({ category: 'os' })
            .title('Operating systems')
        ),
      S.divider(),
      S.listItem()
        .title('Matchers')
        .schemaType('matcher')
        .icon(FaSearch)
        .child(S.documentTypeList('matcher').title('Matchers')),
      S.listItem()
        .title('Sources')
        .schemaType('source')
        .icon(FaDownload)
        .child(S.documentTypeList('source').title('Sources'))
    ])
