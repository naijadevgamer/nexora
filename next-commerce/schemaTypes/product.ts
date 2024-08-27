import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    }),
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    }),
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    defineField({
      name: 'category',
      title: 'Product of category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    }),
  ],
})
