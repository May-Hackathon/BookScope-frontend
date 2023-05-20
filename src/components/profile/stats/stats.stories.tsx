import type { Meta, StoryObj } from '@storybook/react'

import { Stats } from './stats.presenter'

interface Story extends StoryObj<typeof Stats> {}

const meta: Meta<typeof Stats> = {
  component: Stats,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <Stats bookCount={100} reportCount={245} totalPage={24} totalPrice={10000}/>
}