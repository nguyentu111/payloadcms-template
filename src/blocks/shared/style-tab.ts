import { Field, Tab } from 'payload'
const margin: Field = {
  name: 'margin',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'top',
          type: 'text',
        },
        {
          name: 'bottom',
          type: 'text',
        },
        {
          name: 'left',
          type: 'text',
        },
        {
          name: 'right',
          type: 'text',
        },
      ],
    },
  ],
}
const padding: Field = {
  name: 'padding',
  type: 'group',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'top',
          type: 'text',
        },
        {
          name: 'bottom',
          type: 'text',
        },
        {
          name: 'left',
          type: 'text',
        },
        {
          name: 'right',
          type: 'text',
        },
      ],
    },
  ],
}
const widthSelect: Field = {
  name: 'width',
  type: 'select',
  options: [
    {
      label: 'Full',
      value: 'full',
    },
    {
      label: 'Container',
      value: 'container',
    },
    {
      label: 'Content',
      value: 'content',
    },
    {
      label: 'Auto',
      value: 'auto',
    },
  ],
}
const alignSelfSelect: Field = {
  name: 'alignSelf',
  type: 'select',
  options: [
    {
      label: 'Start',
      value: 'start',
    },
    {
      label: 'Center',
      value: 'center',
    },
    {
      label: 'End',
      value: 'end',
    },
    {
      label: 'Baseline',
      value: 'baseline',
    },
    {
      label: 'Stretch',
      value: 'stretch',
    },
  ],
}
const fontSize: Field = {
  name: 'fontSize',
  type: 'text',
}
const textAlign: Field = {
  name: 'textAlign',
  type: 'select',
  options: [
    {
      label: 'Center',
      value: 'center',
    },
    {
      label: 'Left',
      value: 'left',
    },
    {
      label: 'Right',
      value: 'right',
    },
    {
      label: 'Justify',
      value: 'justify',
    },
  ],
}
const textColor: Field = {
  name: 'textColor',
  type: 'text',
  admin: {
    description: 'Use "hsl(var(...))" to reference to saved variable colors.',
  },
}
const fontWeight: Field = {
  name: 'fontWeight',
  type: 'number',
}
export const styleTab: Tab = {
  name: 'styles',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'mobile',
          fields: [
            margin,
            padding,
            { type: 'row', fields: [widthSelect, alignSelfSelect, fontSize] },
            { type: 'row', fields: [textAlign, textColor, fontWeight] },
          ],
        },
        {
          name: 'tablet',
          fields: [
            margin,
            padding,
            { type: 'row', fields: [widthSelect, alignSelfSelect, fontSize] },
            { type: 'row', fields: [textAlign, textColor, fontWeight] },
          ],
        },
        {
          name: 'pc',
          fields: [
            margin,
            padding,
            { type: 'row', fields: [widthSelect, alignSelfSelect, fontSize] },
            { type: 'row', fields: [textAlign, textColor, fontWeight] },
          ],
        },
      ],
    },
  ],
}
