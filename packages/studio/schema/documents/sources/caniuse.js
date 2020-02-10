export const sourceCanIUse = {
  name: 'sourceCanIUse',
  title: 'Source: caniuse.com',
  type: 'document',
  preview: {
    select: {
      title: 'description'
    },
    prepare(selection) {
      const { title } = selection
      return {
        title,
        subtitle: 'caniuse.com'
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
      name: 'agent',
      title: 'Agent identifier',
      description: 'e.g. opera',
      type: 'string',
      fieldset: 'selector',
      validation: Rule => Rule.required()
    }
  ]
}
