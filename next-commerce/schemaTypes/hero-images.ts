import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroImage',
  type: 'document',
  title: 'Two Hero Images',
  fields: [
    defineField({
      name: 'image_1',
      type: 'image',
      title: 'First Image',
    }),
    defineField({
      name: 'image_2',
      type: 'image',
      title: 'Second Image',
    }),
  ],
})
