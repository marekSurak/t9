import type { FC } from 'react'
import React from 'react'

import { CheckboxContainer } from './styled'

interface IProps {
  checked: boolean
  onClick: () => void
}

export const CHECKBOX_ID = 'checkbox'

const Checkbox: FC<IProps> = ({ checked, onClick }) => (
  <CheckboxContainer>
    <label htmlFor={CHECKBOX_ID}>Use word list</label>
    <input
      id={CHECKBOX_ID}
      type="checkbox"
      checked={checked}
      onChange={onClick}
    />
  </CheckboxContainer>
)

export const MemoizedCheckbox = React.memo(Checkbox)
