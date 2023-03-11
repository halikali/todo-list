import { t } from 'i18next'
import { useState } from 'react'

import Button from 'components/UI/atoms/Button/Button'
import Input from 'components/UI/atoms/Input/Input'
import { AddIcon } from 'assets'

interface FormInputProps {
  addFunc: (value: string) => void
}
function FormInput({ addFunc, ...props }: FormInputProps) {
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="form-input" {...props}>
      <Input
        size="full"
        type="text"
        placeholder={t('todo.command')}
        changeFunc={(referance: any) => setInputValue(referance)}
      />
      <Button label={t('general.add')} size="medium" mode="with-icon" onClick={() => addFunc(inputValue)}>
        <img src={AddIcon} alt="add icon" />
      </Button>
    </div>
  )
}

export default FormInput
