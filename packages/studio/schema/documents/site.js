export const site = {
  name: 'site',
  title: 'Site',
  type: 'document',
  fieldsets: [
    {
      name: 'branding',
      title: 'Branding',
      options: { collapsible: true, collapsed: true }
    }
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'domain',
      title: 'Domain',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText',
      validation: Rule => Rule.required()
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'figure',
      fieldset: 'branding'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'figure',
      fieldset: 'branding'
    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
      fieldset: 'branding'
    }
  ]
}
