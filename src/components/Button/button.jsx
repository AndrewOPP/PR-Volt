import { StyledButton } from './button.styled'

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <StyledButton
      style={selected ? {
        'background': '#1976d2',
        'color': '#fff',
      } : undefined}
      type={type}
      {...otherProps}
    >
      {children}
    </StyledButton>
  )
}
