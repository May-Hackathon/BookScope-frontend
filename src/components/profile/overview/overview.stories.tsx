import type { Meta, StoryObj } from '@storybook/react'

import { Overview } from './overview.presenter'
import {mockActivity, mockHeatmap, mockReport} from "@/mockdata/report";

interface Story extends StoryObj<typeof Overview> {}

const meta: Meta<typeof Overview> = {
  component: Overview,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <Overview userProfile={mockReport} pinned={[mockReport,mockReport]} heatmap={mockHeatmap} activity={mockActivity}/>
}