import Default from 'part:@sanity/form-builder/input/image/asset-source-default'
import Cloudinary from 'part:sanity-plugin-asset-source-cloudinary/image-asset-source'
import Unsplash from 'part:sanity-plugin-asset-source-unsplash/image-asset-source'

export const figure = {
  name: 'figure',
  title: 'Figure',
  type: 'image',
  options: {
    sources: [Default, Cloudinary, Unsplash],
    hotspot: true
  },
  fields: [
    {
      name: 'alt',
      title: 'Alternative text (for screen readers)',
      type: 'string',
      options: {
        isHighlighted: true
      }
    }
  ]
}
