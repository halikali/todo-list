import { ComponentMeta, ComponentStory } from '@storybook/react'
import FormInput from './FormInput'

export default {
  title: 'Molecules/FormInput',
  component: FormInput,
} as ComponentMeta<typeof FormInput>

const Template: ComponentStory<typeof FormInput> = (args) => <FormInput {...args} />

export const Primary = Template.bind({})
