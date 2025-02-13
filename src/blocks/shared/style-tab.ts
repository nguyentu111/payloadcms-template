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
const width: Field = {
  name: 'width',
  type: 'select',
  options: [
    {
      label: 'Full',
      value: 'full',
    },
    {
      label: 'Fit Content',
      value: 'fitContent',
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
      label: 'Title',
      value: 'title',
    },
    {
      label: 'Auto',
      value: 'auto',
    },
  ],
}
const maxWidth: Field = {
  name: 'maxWidth',
  type: 'text',
}
const minWidth: Field = {
  name: 'minWidth',
  type: 'text',
}
const alignSelf: Field = {
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
const display: Field = {
  name: 'display',
  type: 'select',
  options: [
    {
      label: 'Block',
      value: 'block',
    },
    {
      label: 'Inline',
      value: 'inline',
    },
    {
      label: 'Inline Block',
      value: 'inline-block',
    },
    {
      label: 'None',
      value: 'none',
    },
  ],
}
const position: Field = {
  name: 'position',
  type: 'select',
  options: [
    {
      label: 'Static',
      value: 'static',
    },
    {
      label: 'Relative',
      value: 'relative',
    },
    {
      label: 'Absolute',
      value: 'absolute',
    },
    {
      label: 'Fixed',
      value: 'fixed',
    },
  ],
}
const zIndex: Field = {
  name: 'zIndex',
  type: 'number',
}
const backGroundColor: Field = {
  name: 'backGroundColor',
  type: 'text',
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
            { type: 'row', fields: [width, alignSelf, fontSize] },
            { type: 'row', fields: [textAlign, textColor, fontWeight] },
            { type: 'row', fields: [display, position, zIndex] },
          ],
        },
        {
          name: 'tablet',
          fields: [
            margin,
            padding,
            { type: 'row', fields: [width, alignSelf, fontSize] },
            { type: 'row', fields: [textAlign, textColor, fontWeight] },
            { type: 'row', fields: [display, position, zIndex] },
          ],
        },
        {
          name: 'pc',
          fields: [
            margin,
            padding,
            { type: 'row', fields: [width, alignSelf, fontSize] },
            { type: 'row', fields: [textAlign, textColor, fontWeight] },
            { type: 'row', fields: [display, position, zIndex] },
          ],
        },
      ],
    },
  ],
}
