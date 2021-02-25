import faker from 'faker'
import 'jest-localstorage-mock'
import { LocalStorageAdapter } from '@/infra/cache/'

const makerSut = (): LocalStorageAdapter => new LocalStorageAdapter()

describe('LocalStorageAdapter', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  test('Should call localStorage with correct values', async () => {
    const sut = makerSut()
    const key = faker.database.column()
    const value = faker.random.word()
    await sut.set(key, value)
    expect(localStorage.setItem).toHaveBeenCalledWith(key, value)
  })
})
