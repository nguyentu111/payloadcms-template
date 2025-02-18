import { clientBlocks, serverBlocks } from '@/blocks'
import { RecursiveContainer } from '@/blocks/Container/config'
import type { Block, Field, Tab } from 'payload'

export const Topbar: Tab = {
  name: 'topBar',
  fields: [
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [...clientBlocks, ...serverBlocks, RecursiveContainer(20, 0)],
    },
  ],
}
