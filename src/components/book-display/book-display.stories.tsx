import type { Meta, StoryObj } from '@storybook/react'

import { BookDisplay } from './book-display.presenter'

interface Story extends StoryObj<typeof BookDisplay> {}

const meta: Meta<typeof BookDisplay> = {
  component: BookDisplay,
  argTypes: {},
}

export default meta

export const Default: Story = {
  render: () => <BookDisplay metadata={{volumeInfo:{title:"test",subtitle:"test",description:"test",imageLinks:{thumbnail:"http://books.google.com/books/content?id=BOWVtwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"}}}}/>
}