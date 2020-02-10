export const sourceWhatIsMyBrowser = {
  name: 'sourceWhatIsMyBrowser',
  title: 'Source: WhatIsMyBrowser.com',
  type: 'document',
  preview: {
    select: {
      title: 'description'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title,
        subtitle: 'WhatIsMyBrowser.com'
      }
    }
  },
  fieldsets: [
    {
      name: 'selector',
      title: 'Selector',
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: [
    {
      name: 'description',
      title: 'Description',
      description: 'e.g. Opera',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'e.g. opera',
      type: 'slug',
      options: {
        source: 'description'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'software',
      title: 'Software identifier',
      description: 'e.g. firefox',
      type: 'string',
      fieldset: 'selector',
      validation: Rule => Rule.required()
    },

    {
      name: 'platform',
      title: 'Platform identifier',
      description: 'e.g. firefox',
      type: 'string',
      options: {
        list: ['standard', 'windows', 'macos', 'ios', 'android', 'linux']
      },
      fieldset: 'selector',
      validation: Rule => Rule.required()
    }
  ]
}
