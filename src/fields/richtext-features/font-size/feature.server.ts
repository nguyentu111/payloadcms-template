import { createNode, createServerFeature } from '@payloadcms/richtext-lexical'

export const FontSizeFeature = createServerFeature({
  feature: {
    ClientFeature: '@/fields/richtext-features/font-size/feature.client.ts#FontSizeFeatureClient',
  },

  key: 'fontSize',
})
