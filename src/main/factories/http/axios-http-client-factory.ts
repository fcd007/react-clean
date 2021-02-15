import { AxiosHttpCLient } from '@/infra/http/axios-http-client/axios-http-client'

export const makeAxiosHttpClient = (): AxiosHttpCLient => {
  return new AxiosHttpCLient()
}
