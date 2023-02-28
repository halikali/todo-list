import Button from 'components/UI/atoms/Button/Button'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <p>hello world</p>
      <h1>example heading</h1>
      <Button label={t('general.add')} />
    </div>
  )
}

export default Home
