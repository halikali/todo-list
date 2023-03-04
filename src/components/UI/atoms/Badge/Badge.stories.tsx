import { ComponentMeta, ComponentStory } from '@storybook/react'
import Badge from './Badge'

export default {
  title: 'Atoms/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Short = Template.bind({})
Short.args = {
  text: '5',
}

export const Long = Template.bind({})
Long.args = {
  text: '2 de 5',
}
