import { LocalSaveAccessToken } from './local-save-access-token'
import { SetStorageSpy } from '@/data/test'
import fake from 'faker'

type SuTypes = {
  sut: LocalSaveAccessToken
  setStorageSpy: SetStorageSpy
}

const makerSut = (): SuTypes => {
  const setStorageSpy = new SetStorageSpy()
  const sut = new LocalSaveAccessToken(setStorageSpy)

  return {
    sut,
    setStorageSpy
  }
}

describe('LocalSaveAccessToken', () => {
  test('Should call SetStorage with correct value', async () => {
    const { sut, setStorageSpy } = makerSut()
    const accessToken = fake.random.uuid()
    await sut.save(accessToken)
    expect(setStorageSpy.key).toBe('accessToken')
    expect(setStorageSpy.value).toBe(accessToken)
  })
})
