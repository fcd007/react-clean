import { AxiosHttpCLient } from './axios-http-client'
import faker from 'faker'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makerSut = (): AxiosHttpCLient => {
  return new AxiosHttpCLient()
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL', async () => {
    const url = faker.internet.url()
    const sut = makerSut()
    await sut.post({ url })
    expect(mockedAxios).toHaveBeenCalledWith(url)
  })
})
