import Badge from 'components/UI/atoms/Badge/Badge'
import Text from 'components/UI/atoms/Text/Text'

interface BadgeInfoProps {
  text: string
  badgeText: any | number
  textColor: string
}

function BadgeInfo({ badgeText, text, textColor, ...props }: BadgeInfoProps) {
  return (
    <div className="badge-info" {...props}>
      <Text color={textColor} text={text} />
      <Badge text={badgeText} />
    </div>
  )
}

export default BadgeInfo
