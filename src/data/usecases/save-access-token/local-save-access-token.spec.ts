import { LocalSaveAccessToken } from './local-save-access-token'
import { SetStorageMock } from '@/data/test'
import fake from 'faker'

type SuTypes = {
  sut: LocalSaveAccessToken
  setStorageMock: SetStorageMock
}

const makerSut = (): SuTypes => {
  const setStorageMock = new SetStorageMock()
  const sut = new LocalSaveAccessToken(setStorageMock)

  return {
    sut,
    setStorageMock
  }
}

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const { sut, setStorageMock } = makerSut()
    const accessToken = fake.random.uuid()
    await sut.save(accessToken)
    expect(setStorageMock.key).toBe('accessToken')
    expect(setStorageMock.value).toBe(accessToken)
  })
})
