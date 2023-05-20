import type { Meta, StoryObj } from '@storybook/react'

import { Thumbnail } from './thumbnail.presenter'

interface Story extends StoryObj<typeof Thumbnail> {}

const meta: Meta<typeof Thumbnail> = {
  component: Thumbnail,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <Thumbnail book={{id:1,tags:[],title:"本のタイトル",author:"著者",isbn:"9784422311074"}}/>
}
export const Pinned: Story = {
  render: () => <Thumbnail book={{id:1,tags:[],title:"本のタイトル",author:"著者",isbn:"9784422311074"}} pinned/>
}
