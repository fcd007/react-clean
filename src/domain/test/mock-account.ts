import faker from 'faker'

import { AuthenticationParams } from '@/domain/services'
import { AccountModel } from '@/domain/models/'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  acessToken: faker.random.uuid()
})
