import { createServerFeature } from '@payloadcms/richtext-lexical'

export const FontColorFeature = createServerFeature({
  feature: {
    ClientFeature: '@/fields/richtext-features/text-color/feature.client.ts#FontColorFeatureClient',
  },
  key: 'fontColor',
})
