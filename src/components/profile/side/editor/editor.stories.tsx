import type { Meta, StoryObj } from '@storybook/react'

import { ProfileEditor } from './editor.presenter'
import {mockUser} from "@/mockdata/report";

interface Story extends StoryObj<typeof ProfileEditor> {}

const meta: Meta<typeof ProfileEditor> = {
  component: ProfileEditor,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <ProfileEditor user={mockUser}/>
}