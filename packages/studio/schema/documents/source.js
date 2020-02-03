export const source = {
  name: 'source',
  title: 'Source',
  type: 'document',
  preview: {
    select: {
      title: 'description',
      subtitle: 'currentVersion',
      media: 'matcher.upgradable.icon'
    }
  },
  fields: [
    {
      name: 'description',
      title: 'Description',
      description: 'e.g. Opera on Wikipedia',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'e.g. opera-on-wikipedia',
      type: 'slug',
      options: {
        source: 'description'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Matcher',
      name: 'matcher',
      type: 'reference',
      to: [{ type: 'matcher' }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Plugin',
      name: 'plugin',
      type: 'string',
      options: {
        list: [
          { title: 'Wikipedia', value: 'wikipedia' },
          { title: 'Can I Use', value: 'caniuse' }
        ]
      },
      validation: Rule => Rule.required()
    }
  ]
}
