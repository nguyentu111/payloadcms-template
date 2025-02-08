import type { ArrayField } from 'payload'

import deepMerge from '@/utilities/deepMerge'
import { relationshipField } from './relationshipField'

export const relationshipFieldGroup = ({ overrides = {} } = {}): ArrayField => {
  const generateRelationshipFieldGroup: ArrayField = {
    name: 'colections',
    type: 'array',
    fields: [relationshipField()],
  }

  return deepMerge(generateRelationshipFieldGroup, overrides)
}
