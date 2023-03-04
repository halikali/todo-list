interface InputProps {
  type: 'text'
  placeholder?: any
  disabled?: boolean
  size: 'small' | 'medium' | 'full'
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
