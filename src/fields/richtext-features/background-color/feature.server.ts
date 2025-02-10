import { createServerFeature } from '@payloadcms/richtext-lexical'

export const BackgroundColorFeature = createServerFeature({
  feature: {
    ClientFeature:
      '@/fields/richtext-features/background-color/feature.client.ts#BackgroundColorFeatureClient',
  },
  key: 'backgroundColor',
})
