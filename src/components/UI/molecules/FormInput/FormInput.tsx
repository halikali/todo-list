import { t } from 'i18next'

import Button from 'components/UI/atoms/Button/Button'
import Input from 'components/UI/atoms/Input/Input'
import { AddIcon } from 'assets'

function FormInput({ ...props }) {
  return (
    <div className="form-input" {...props}>
      <Input size="full" type="text" placeholder={t('todo.command')} />
      <Button label={t('general.add')} size="medium" mode="with-icon">
        <img src={AddIcon} alt="add icon" />
      </Button>
    </div>
  )
}

export default FormInput
