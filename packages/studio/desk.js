import S from '@sanity/desk-tool/structure-builder'
import { FaDesktop, FaMousePointer, FaLaptop } from 'react-icons/fa'

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
            .title('Browsers')
        )
    ])
