import type { FC } from 'react'

import { BatteryIcon } from 'components/icons/BatteryIcon'
import { SignalIcon } from 'components/icons/SignalIcon'
import { WifiIcon } from 'components/icons/WifiIcon'

import { Time } from './components/Time'
import { HeaderContainer, IconsContainer } from './styled'

export const Header: FC = () => (
  <HeaderContainer>
    <Time />

    <IconsContainer>
      <SignalIcon />
      <WifiIcon />
      <BatteryIcon />
    </IconsContainer>
  </HeaderContainer>
)
