import type { Meta, StoryObj } from '@storybook/react'

import { ReportEditor } from './editor.presenter'
import {mockReport} from "@/mockdata/report";

interface Story extends StoryObj<typeof ReportEditor> {}

const meta: Meta<typeof ReportEditor> = {
  component: ReportEditor,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <ReportEditor report={mockReport}/>
}