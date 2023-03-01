import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddIcon } from '../../../../assets'

import Button from './Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <img src={AddIcon} alt="add icon" />
  </Button>
)

export const Primary = Template.bind({})
Primary.args = {
  label: 'Button',
  size: 'large',
}

export const Secondary = Template.bind({})
Secondary.args = {
  priority: 'secondary',
  label: 'Button',
  size: 'large',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  mode: 'with-icon',
  label: 'Button',
  size: 'large',
}

export const JustIcon = Template.bind({})
JustIcon.args = {
  mode: 'just-icon',
  label: 'Button',
  size: 'small',
}
