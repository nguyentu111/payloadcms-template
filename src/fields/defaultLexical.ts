import {
  AlignFeature,
  BlockquoteFeature,
  BoldFeature,
  ChecklistFeature,
  EXPERIMENTAL_TableFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  ItalicFeature,
  lexicalEditor,
  LinkFeature,
  OrderedListFeature,
  ParagraphFeature,
  SubscriptFeature,
  SuperscriptFeature,
  UnderlineFeature,
  UnorderedListFeature,
  UploadFeature,
  StrikethroughFeature,
  IndentFeature,
  FixedToolbarFeature,
  InlineToolbarFeature,
} from '@payloadcms/richtext-lexical'
import { Config } from 'payload'
import { FontColorFeature } from './richtext-features/text-color/feature.server'
import { BackgroundColorFeature } from './richtext-features/background-color/feature.server'
import { FontSizeFeature } from './richtext-features/font-size/feature.server'
import { YoutubeFeature } from './richtext-features/embed/features/youtube/feature.server'
import { VimeoFeature } from './richtext-features/embed/features/vimeo/feature.server'
export const defaultLexical: Config['editor'] = lexicalEditor({
  features: () => {
    return [
      ParagraphFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
      StrikethroughFeature(),
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'] }),
      LinkFeature({
        enabledCollections: ['pages', 'posts'],
        fields: ({ defaultFields }) => {
          const defaultFieldsWithoutUrl = defaultFields.filter((field) => {
            if ('name' in field && field.name === 'url') return false
            return true
          })

          return [
            ...defaultFieldsWithoutUrl,
            {
              name: 'url',
              type: 'text',
              admin: {
                condition: ({ linkType }) => linkType !== 'internal',
              },
              label: ({ t }) => t('fields:enterURL'),
              required: true,
              validate: (value: any, options: any) => {
                if (options?.siblingData?.linkType === 'internal') {
                  return true // no validation needed, as no url should exist for internal links
                }
                return value ? true : 'URL is required'
              },
            },
          ]
        },
      }),
      OrderedListFeature(),
      UnorderedListFeature(),
      ChecklistFeature(),
      BlockquoteFeature(),
      UploadFeature(),
      EXPERIMENTAL_TableFeature(),
      AlignFeature(),
      HorizontalRuleFeature(),
      SuperscriptFeature(),
      SubscriptFeature(),
      // FontColorFeature(),
      // BackgroundColorFeature(),
      // FontSizeFeature(),
      YoutubeFeature(),
      VimeoFeature(),
      IndentFeature(),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
    ]
  },
})
