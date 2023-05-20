import type { Meta, StoryObj } from '@storybook/react'

import { Bookshelf } from './bookshelf.presenter'
import { mockReport} from "@/mockdata/report";

interface Story extends StoryObj<typeof Bookshelf> {}

const meta: Meta<typeof Bookshelf> = {
  component: Bookshelf,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <Bookshelf reports={[mockReport,mockReport]}/>
}