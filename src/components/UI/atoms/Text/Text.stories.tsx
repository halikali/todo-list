import { ComponentMeta, ComponentStory } from '@storybook/react'
import Text from './Text'

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    color: { control: 'color' },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'Example text',
  color: '#4EA8DE',
}
