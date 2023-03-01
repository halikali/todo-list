import { useTranslation } from 'react-i18next'

import Button from 'components/UI/atoms/Button/Button'
import { AddIcon, TrashIcon } from 'assets'

function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <p>hello world</p>
      <h1>example heading</h1>
      <Button label={t('general.add')} size="large" mode="with-icon">
        <img src={AddIcon} alt="add icon" />
      </Button>

      <Button label={t('general.add')} size="medium" mode="with-icon">
        <img src={AddIcon} alt="add icon" />
      </Button>

      <Button label={t('general.add')} mode="just-icon" size="small" priority="secondary">
        <img src={TrashIcon} alt="add icon" className="button__image" />
      </Button>
    </div>
  )
}

export default Home
