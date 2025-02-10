'use client'

import {
  createClientFeature,
  toolbarFeatureButtonsGroupWithItems,
} from '@payloadcms/richtext-lexical/client'

// Not defined yet...
import { FontSizePlugin } from './component'

export const FontSizeFeatureClient = createClientFeature({
  toolbarFixed: {
    groups: [
      toolbarFeatureButtonsGroupWithItems([
        {
          key: 'fontSize',
          label: 'fontSize',
          Component: FontSizePlugin,
        },
      ]),
    ],
  },
})
