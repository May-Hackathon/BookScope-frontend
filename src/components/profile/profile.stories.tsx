import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './profile.presenter'
import {mockActivity, mockHeatmap, mockReport, mockUser} from "@/mockdata/report";

interface Story extends StoryObj<typeof Profile> {}

const meta: Meta<typeof Profile> = {
  component: Profile,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <Profile user={mockUser} isMe={true} pinned={[mockReport]} heatmap={mockHeatmap} activity={mockActivity} stats={{bookCount: 100, reportCount: 100, totalPage: 100, totalPrice: 100}} shelf={[mockReport]}/>
}