// @ts-ignore
import S from '@sanity/desk-tool/structure-builder'
// @ts-ignore
import EyeIcon from 'part:@sanity/base/eye-icon'
// @ts-ignore
import EditIcon from 'part:@sanity/base/edit-icon'
import {
  FaDesktop,
  FaMousePointer,
  FaLaptop,
  FaSearch,
  FaDownload,
  FaSync
} from 'react-icons/fa'
import { SourcePreview } from './preview'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Sites')
        .icon(FaDesktop)
        .child(S.documentTypeList('site').title('Sites')),
      S.divider(),
      S.listItem()
        .title('Browsers')
        .icon(FaMousePointer)
        .child(
          S.documentTypeList('upgradable')
            .filter('category == $category')
            .params({ category: 'browser' })
            .title('Browsers')
        ),
      S.listItem()
        .title('Operating Systems')
        .icon(FaLaptop)
        .child(
          S.documentTypeList('upgradable')
            .filter('category == $category')
            .params({ category: 'os' })
            .title('Operating Systems')
        ),
      S.divider(),
      S.listItem()
        .title('Matchers')
        .icon(FaSearch)
        .child(S.documentTypeList('matcher').title('Matchers')),
      S.listItem()
        .title('Updaters')
        .icon(FaSync)
        .child(S.documentTypeList('updater').title('Updater')),
      S.listItem()
        .title('Sources')
        .icon(FaDownload)
        .child(
          S.documentList()
            .title('Sources')
            .filter(
              // Would like to use _type match "source*" but then the Create
              // button doesn't work...
              '_type == "sourceWikipedia" || _type == "sourceCanIUse" || _type == "sourceWhatIsMyBrowser"'
            )
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(SourcePreview)
                    .icon(EyeIcon)
                    .title('Preview')
                ])
            )
        )
    ])
