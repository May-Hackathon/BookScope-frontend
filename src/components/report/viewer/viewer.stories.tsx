import type { Meta, StoryObj } from '@storybook/react'

import { ReportViewer } from './viewer.presenter'
import {mockReport} from "@/mockdata/report";

interface Story extends StoryObj<typeof ReportViewer> {}

const meta: Meta<typeof ReportViewer> = {
  component: ReportViewer,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <ReportViewer report={mockReport}/>
}
export const MyPost: Story = {
  render: () => <ReportViewer report={{...mockReport,isMyPost:true}}/>
}