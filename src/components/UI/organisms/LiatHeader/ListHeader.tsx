import BadgeInfo from 'components/UI/molecules/BadgeInfo/BadgeInfo'
import { t } from 'i18next'

interface ListHeaderProps {
  totalCount: number
  completedCount: number
}

function ListHeader({ completedCount, totalCount, ...props }: ListHeaderProps) {
  return (
    <div className="list-header" {...props}>
      <BadgeInfo badgeText={totalCount} textColor="#4EA8DE" text={t('todo.countInfo')} />
      <BadgeInfo
        badgeText={t('todo.completedCount', { count: totalCount || 0, active: completedCount || 0 })}
        textColor="#8284FA"
        text={t('todo.completedInfo')}
      />
    </div>
  )
}

export default ListHeader
