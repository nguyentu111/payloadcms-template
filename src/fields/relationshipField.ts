import type { RelationshipField } from 'payload'

import deepMerge from '@/utilities/deepMerge'

export const relationshipField = ({ overrides = {} } = {}): RelationshipField => {
  const generateRelationshipField: RelationshipField = {
    name: 'reference',
    type: 'relationship',
    label: 'Document to link to',
    relationTo: ['pages', 'posts'],
    required: true,
  }

  return deepMerge(generateRelationshipField, overrides)
}
