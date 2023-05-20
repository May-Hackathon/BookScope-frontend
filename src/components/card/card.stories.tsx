import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card.presenter'

interface Story extends StoryObj<typeof Card> {}

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {},
}

export default meta

export const Vertical: Story = {
  render: () => <Card type={"vertical"} report={{book: {id:1,tags:[],title:"本のタイトル",author:"著者",isbn:"9784422311074"},tags: ["テスト1","テスト2","テスト3","テスト4","テストあああああああああ5",],title:"感想文タイトル",content: "",pinned: true, id: 0, user: {name: "test",id: 0}}}/>
}
export const Horizontal: Story = {
  render: () => <Card type={"horizontal"} report={{book: {id:1,tags:[],title:"本のタイトル",author:"著者",isbn:"9784422311074"},tags: ["テスト1","テスト2","テスト3","テスト4","テストあああああああああ5",],title:"感想文タイトル",content: "",pinned: true, id: 0, user: {name: "test",id: 0}}}/>
}