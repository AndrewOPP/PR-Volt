import React, { FC } from 'react'
import { StyledButton } from './button.styled'

type MyButtonProps = {
  selected?: boolean
  type?: string
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<MyButtonProps> = ({
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
