import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './card.presenter'
import {mockReport} from "@/mockdata/report";

interface Story extends StoryObj<typeof Card> {}

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {},
}

export default meta

export const Vertical: Story = {
  render: () => <Card type={"vertical"} report={mockReport}/>
}
export const Horizontal: Story = {
  render: () => <Card type={"horizontal"} report={mockReport}/>
}