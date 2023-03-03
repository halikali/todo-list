import { ComponentStory, ComponentMeta } from '@storybook/react'
import Checkbox from './Checkbox'

export default {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} as ComponentMeta<typeof Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Primary = Template.bind({})

Primary.args = {
  size: 'small',
  checked: false,
}
