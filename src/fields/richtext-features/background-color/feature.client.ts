'use client'

import {
  createClientFeature,
  toolbarFeatureButtonsGroupWithItems,
} from '@payloadcms/richtext-lexical/client'

// Not defined yet...
import { DropdownColorPicker } from './components/DropdownColorPicker'

export const BackgroundColorFeatureClient = createClientFeature({
  toolbarFixed: {
    groups: [
      toolbarFeatureButtonsGroupWithItems([
        {
          key: 'backgroundColor',
          label: 'Color Text',
          Component: DropdownColorPicker,
        },
      ]),
    ],
  },
  toolbarInline: {
    groups: [
      toolbarFeatureButtonsGroupWithItems([
        {
          key: 'backgroundColor',
          label: 'Color Text',
          Component: DropdownColorPicker,
        },
      ]),
    ],
  },
})
