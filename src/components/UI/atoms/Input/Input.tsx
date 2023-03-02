interface InputProps {
  type: 'text'
  placeholder?: string
  disabled?: boolean
  size: 'small' | 'medium' | 'large'
}

function Input({ type, placeholder, disabled, size, ...props }: InputProps) {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={['input', `input--${size}`].join(' ')}
      {...props}
    />
  )
}

export default Input
