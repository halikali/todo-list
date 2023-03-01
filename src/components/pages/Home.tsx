import { useTranslation } from 'react-i18next'

import Button from 'components/UI/atoms/Button/Button'

function Home() {
  const { t } = useTranslation()

  return (
    <div>
      <p>hello world</p>
      <h1>example heading</h1>
      <Button label={t('general.add')} primary />
    </div>
  )
}

export default Home
