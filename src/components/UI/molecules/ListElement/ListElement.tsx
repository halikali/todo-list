import { TrashIcon } from 'assets'
import Button from 'components/UI/atoms/Button/Button'
import Checkbox from 'components/UI/atoms/Checkbox/Checkbox'

interface ListElementProps {
  text: any
  checked: boolean
  onClick?: () => any
}

function ListElement({ text, checked, ...props }: ListElementProps) {
  return (
    <div className="list-element" {...props}>
      <Checkbox size="small" checked={checked} />
      <p className={['list-element__text', `${checked ? 'text-faded' : ''}`].join(' ')}>{text}</p>
      <Button size="small" mode="just-icon" priority="secondary">
        <img src={TrashIcon} alt="trash icon" />
      </Button>
    </div>
  )
}

export default ListElement
