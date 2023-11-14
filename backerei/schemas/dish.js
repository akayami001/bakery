export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the dish',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'short_desciription',
      title: 'Short Description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    },
    {
      name: 'price',
      title: 'Price of the dish',
      type: 'number',
    },
    {
      name: 'Image',
      title: 'Image of the dish',
      type: 'image',
    },
  ],
}
