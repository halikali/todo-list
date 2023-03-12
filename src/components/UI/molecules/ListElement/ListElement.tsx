import { TrashIcon } from 'assets'
import Button from 'components/UI/atoms/Button/Button'
import Checkbox from 'components/UI/atoms/Checkbox/Checkbox'

interface ListElementProps {
  text: string
  checked: boolean
  id: number | string
  onClick?: () => any
  deleteFunc?: (id: number | string) => any
  changeFunc: (id: number | string) => any
}

function ListElement({ text, checked, deleteFunc, changeFunc, id, ...props }: ListElementProps) {
  return (
    <div className="list-element" {...props}>
      <Checkbox size="small" checked={checked} id={id} changeFunc={changeFunc} />
      <p className={['list-element__text', `${checked ? 'text-faded' : ''}`].join(' ')}>{text}</p>
      <Button size="small" mode="just-icon" priority="secondary" onClick={() => deleteFunc && deleteFunc(id)}>
        <img src={TrashIcon} alt="trash icon" />
      </Button>
    </div>
  )
}

export default ListElement
