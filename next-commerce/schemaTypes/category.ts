import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  type: 'document',
  title: 'Categories',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    }),
  ],
})
