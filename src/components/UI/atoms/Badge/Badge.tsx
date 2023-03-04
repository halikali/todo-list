interface BadgeProps {
  text: any
}

function Badge({ text, ...props }: BadgeProps) {
  return (
    <div className="badge" {...props}>
      <span className="badge__text">{text}</span>
    </div>
  )
}

export default Badge
