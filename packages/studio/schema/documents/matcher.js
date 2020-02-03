export const matcher = {
  name: 'matcher',
  title: 'Matcher',
  type: 'document',
  preview: {
    select: {
      title: 'description',
      subtitle: 'currentVersion',
      media: 'upgradable.icon'
    }
  },
  fields: [
    {
      name: 'description',
      title: 'Description',
      description: 'e.g. Firefox ESR, Edge for Windows',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      description: 'e.g. firefox-esr',
      type: 'slug',
      options: {
        source: 'description'
      },
      validation: Rule => Rule.required()
    },
    {
      title: 'Upgradable',
      name: 'upgradable',
      type: 'reference',
      to: [{ type: 'upgradable' }],
      validation: Rule => Rule.required()
    },
    {
      title: 'Satisfies',
      name: 'satisfies',
      type: 'satisfies',
      validation: Rule => Rule.required()
    },
    {
      title: 'Current version',
      name: 'currentVersion',
      description: 'Will be set by a version source.',
      type: 'string',
      // readOnly: true,
      validation: Rule => Rule.regex(/^\d[\d\.]*\d$/, { name: 'version' })
    }
  ]
}
