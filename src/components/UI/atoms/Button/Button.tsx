interface ButtonProps {
  mode?: '' | 'with-icon' | 'just-icon'
  label?: any
  size: 'small' | 'medium' | 'large'
  priority?: '' | 'secondary'
  onClick?: () => void
  children?: JSX.Element | JSX.Element[]
}

function Button({ mode = '', label, size, priority, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      className={['button', `button--${mode}`, `button--${size}`, `button--${priority}`].join(' ')}
      {...props}
    >
      {mode !== 'just-icon' && label}
      {mode !== '' && props.children && props.children}
    </button>
  )
}

export default Button
