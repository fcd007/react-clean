import React from 'react'
import { makerRemoteAuthenticate } from '@/main/factories/services/authentication/remote-authentication-factory'
import { makerLoginValidation } from '@/main/factories/pages/login/login-validation-factory'
import { Login } from '@/presentation/pages'

export const makerLogin: React.FC = () => {
  return (
    <Login
      authentication={makerRemoteAuthenticate()}
      validation={makerLoginValidation()}
    />
  )
}
