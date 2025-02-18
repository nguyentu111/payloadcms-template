import { Tab } from 'payload'
export const styleTab: Tab = {
  name: 'styles',
  fields: [
    {
      name: 'customCss',
      type: 'code',
      admin: {
        language: 'scss',
      },
    },
  ],
}
