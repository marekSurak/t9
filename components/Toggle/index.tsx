import type { FC } from 'react'
import React from 'react'

import { ToggleContainer } from './styled'

interface IProps {
  checked: boolean
  onClick: () => void
}

const TOGGLE_ID = 'toggle'

const Toggle: FC<IProps> = ({ checked, onClick }) => (
  <ToggleContainer>
    <label htmlFor={TOGGLE_ID}>Use word list</label>
    <input id={TOGGLE_ID} type="checkbox" checked={checked} onClick={onClick} />
  </ToggleContainer>
)

export const MemoizedToggle = React.memo(Toggle)
