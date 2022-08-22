import type { FC } from 'react'

interface IProps {
  onClick: () => void
  children: React.ReactNode
}

export const DeleteButton: FC<IProps> = ({ onClick, children }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
)
