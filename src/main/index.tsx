import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@/presentation/components/index'
import { makerLogin } from './factories/pages/login/login-factory'

import '@/presentation/styles/global.scss'

ReactDOM.render(
  <Router
    makeLogin={makerLogin}
  />,
  document.getElementById('main')
)
