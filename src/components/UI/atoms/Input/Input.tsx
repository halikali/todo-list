import { useRef } from 'react'

interface InputProps {
  type: 'text' | 'password' | 'email'
  placeholder?: any
  disabled?: boolean
  size: 'small' | 'medium' | 'full'
  changeFunc?: (value: any) => any
}

function Input({ type, placeholder, disabled, size, changeFunc, ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={['input', `input--${size}`].join(' ')}
      onChange={() => changeFunc && changeFunc(inputRef.current?.value)}
      {...props}
      ref={inputRef}
    />
  )
}

export default Input
