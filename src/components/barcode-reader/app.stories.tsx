
import type { Meta, StoryObj } from '@storybook/react'

import {ScannerWrapper} from './scanner-wrapper'

interface Story extends StoryObj<typeof ScannerWrapper> {}

const meta: Meta<typeof ScannerWrapper> = {
  component: ScannerWrapper,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <ScannerWrapper callback={(result)=>console.log(result)}/>
}