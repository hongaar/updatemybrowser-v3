import { languages } from '@umb/core'

export const localeText = {
  name: 'localeText',
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
    type: 'text',
    fieldset: lang.isDefault ? null : 'translations'
  }))
}
