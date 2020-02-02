import { languages } from '@umb/core'

export const localeString = {
  name: 'localeString',
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: { collapsible: true }
    }
  ],
  fields: languages.map(lang => ({
    name: lang.id,
    title: lang.title,
    type: 'string',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
