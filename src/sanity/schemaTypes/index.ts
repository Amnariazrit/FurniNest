import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { category } from './categories'
import contactForm from './contact-form'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, contactForm],
}
