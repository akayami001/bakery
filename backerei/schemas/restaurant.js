import category from './category'
export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {name: 'name', type: 'string', title: 'Restaurant name', validation: (Rule) => Rule.required()},
    {
      name: 'short_description',
      type: 'string',
      title: 'Short Desc',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'string',
      title: 'Restaurant Image',
    },
    {name: 'lat', type: 'number', title: 'Restaurant Lat'},
    {name: 'long', type: 'number', title: 'Restaurant Long'},
    {
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'Rating',
      type: 'number',
      title: 'Enter a Rating',
      validation: (Rule) =>
        Rule.required().min(1).max(5).error('Please emeter a valure between 1-5'),
    },
    {
      name: 'type',
      type: 'category',
      validation: (Rule) => Rule.required(),
      title: 'reference',
      to: [{type: category}],
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    },
  ],
}
