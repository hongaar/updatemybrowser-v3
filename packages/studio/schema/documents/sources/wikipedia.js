export const sourceWikipedia = {
  name: 'sourceWikipedia',
  title: 'Source: Wikipedia',
  type: 'document',
  preview: {
    select: {
      title: 'description'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title,
        subtitle: 'Wikipedia'
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
      name: 'pageId',
      title: 'Page ID',
      description: 'e.g. 2602583',
      type: 'string',
      fieldset: 'selector',
      validation: Rule => Rule.required()
    },
    {
      name: 'field',
      title: 'Field',
      description: 'e.g. latest_release_version',
      type: 'string',
      fieldset: 'selector',
      validation: Rule => Rule.required()
    }
  ]
}
