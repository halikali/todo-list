import { ComponentStory, ComponentMeta } from '@storybook/react'

import Input from './Input'

export default {
  title: 'Atoms/Input',
  component: Input,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'full'] },
  },
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  type: 'text',
  placeholder: 'Placeholder',
  size: 'small',
  disabled: false,
}

export const Disabled = Template.bind({})
Disabled.args = {
  type: 'text',
  placeholder: 'Placeholder',
  size: 'small',
  disabled: true,
}
