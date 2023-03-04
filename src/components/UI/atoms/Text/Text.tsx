interface TextProps {
  text: string
  color: any
}

function Text({ text, color, ...props }: TextProps) {
  return (
    <p style={{ color }} {...props} className="text">
      {text}
    </p>
  )
}

export default Text
