import type { Meta, StoryObj } from '@storybook/react'

import { ProfileViewer } from './viewer.presenter'
import {mockUser} from "@/mockdata/report";

interface Story extends StoryObj<typeof ProfileViewer> {}

const meta: Meta<typeof ProfileViewer> = {
  component: ProfileViewer,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <ProfileViewer user={mockUser}/>
}