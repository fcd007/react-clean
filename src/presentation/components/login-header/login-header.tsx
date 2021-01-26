import React, { memo } from 'react'
import Logo from '@/presentation/components/logo/logo'
import Styles from './login-header-styles.scss'

type Props = React.HTMLAttributes<HTMLElement>

const LoginHeader: React.FC<Props> = (props: Props) => {
  return (
    <header className={ Styles.header}>
      <Logo />
      <h1>Clean React</h1>
    </header>
  )
}

export default memo(LoginHeader)
