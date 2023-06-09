import type { Meta, StoryObj } from '@storybook/react'

import { Textarea } from './textarea.presenter'
import {useState} from "react";

interface Story extends StoryObj<typeof Textarea> {}

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  argTypes: {},
}

export default meta

const content = "日本国民は、正当に選挙された国会における代表者を通じて行動し、われらとわれらの子孫のために、諸国民との協和による成果と、わが国全土にわたつて自由のもたらす恵沢を確保し、政府の行為によつて再び戦争の惨禍が起ることのないやうにすることを決意し、ここに主権が国民に存することを宣言し、この憲法を確定する。そもそも国政は、国民の厳粛な信託によるものであつて、その権威は国民に由来し、その権力は国民の代表者がこれを行使し、その福利は国民がこれを享受する。これは人類普遍の原理であり、この憲法は、かかる原理に基くものである。われらは、これに反する一切の憲法、法令及び詔勅を排除する。日本国民は、恒久の平和を念願し、人間相互の関係を支配する崇高な理想を深く自覚するのであつて、平和を愛する諸国民の公正と信義に信頼して、われらの安全と生存を保持しようと決意した。われらは、平和を維持し、専制と隷従、圧迫と偏狭を地上か";

export const Default: Story = {
  render: () => {
    const [data,setData] = useState(content)
    return <Textarea content={data} onChange={setData}/>
  }
}
export const ReadOnly: Story = {
  render: () => <Textarea content={content} readonly/>
}