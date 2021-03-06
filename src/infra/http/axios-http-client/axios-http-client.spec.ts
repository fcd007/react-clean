import axios from 'axios'

import { AxiosHttpCLient } from './axios-http-client'
import { mockPostRequest } from '@/data/test'
import { mockAxios, mockHttpResponse } from '@/infra/test'

jest.mock('axios')

type SuTypes = {
  sut: AxiosHttpCLient
  mockedAxios: jest.Mocked<typeof axios>
}

const makerSut = (): SuTypes => {
  const sut = new AxiosHttpCLient()
  const mockedAxios = mockAxios()
  return {
    sut,
    mockedAxios
  }
}

describe('AxiosHttpClient', () => {
  test('Should call axios with correct URL, verb and body', async () => {
    const request = mockPostRequest()
    const { sut, mockedAxios } = makerSut()
    await sut.post(request)
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should call return correct statusCode and body', () => {
    const { sut, mockedAxios } = makerSut()
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })

  test('Should call return correct statusCode and on failure', () => {
    const { sut, mockedAxios } = makerSut()
    mockedAxios.post.mockRejectedValueOnce({
      response: mockHttpResponse()
    })
    const promise = sut.post(mockPostRequest())
    expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
  })
})
