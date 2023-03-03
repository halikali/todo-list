import { TickIcon } from '../../../../assets'

interface CheckboxProps {
  checked?: boolean
  size: 'small' | 'medium' | 'large'
}

function Checkbox({ checked, size, ...props }: CheckboxProps) {
  return (
    <label className={['checkbox', `checkbox--${size}`].join(' ')} {...props}>
      <input type="checkbox" checked={checked} />
      <img src={TickIcon} alt="tick icon" className={`image--${size}`} />
      <span className="checkbox__icon" />
    </label>
  )
}

export default Checkbox
