import { ClipBoardIcon } from 'assets'
import Text from 'components/UI/atoms/Text/Text'
import { t } from 'i18next'

function EmptyPage() {
  return (
    <div className="empty-page">
      <img src={ClipBoardIcon} alt="clip board icon" />
      <Text color="var(--color-gray-300)" text={t('todo.emptyMessage')} />
      <Text color="var(--color-gray-300)" text={t('todo.emptyOrderMessage')} />
    </div>
  )
}

export default EmptyPage
