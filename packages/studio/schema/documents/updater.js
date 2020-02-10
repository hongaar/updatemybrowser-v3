export const updater = {
  name: 'updater',
  title: 'Updater',
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
      title: 'Source',
      name: 'source',
      type: 'reference',
      to: [
        { type: 'sourceWikipedia' },
        { type: 'sourceCanIUse' },
        { type: 'sourceWhatIsMyBrowser' }
      ],
      validation: Rule => Rule.required()
    }
  ]
}
