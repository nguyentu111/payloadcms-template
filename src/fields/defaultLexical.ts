import { Config } from 'payload'
import {
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
  lexicalEditor,
  UnderlineFeature,
  OrderedListFeature,
  UnorderedListFeature,
  ChecklistFeature,
  BlockquoteFeature,
  UploadFeature,
  EXPERIMENTAL_TableFeature,
  AlignFeature,
  HorizontalRuleFeature,
  SuperscriptFeature,
  SubscriptFeature,
  TreeViewFeature,
} from '@payloadcms/richtext-lexical'
import {
  BgColorFeature,
  HighlightColorFeature,
  TextColorFeature,
  YoutubeFeature,
  VimeoFeature,
} from 'payloadcms-lexical-ext'
export const defaultLexical: Config['editor'] = lexicalEditor({
  features: () => {
    return [
      ParagraphFeature(),
      UnderlineFeature(),
      BoldFeature(),
      ItalicFeature(),
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
      TextColorFeature(),
      HighlightColorFeature(),
      BgColorFeature(),
      YoutubeFeature(),
      VimeoFeature(),
    ]
  },
})
