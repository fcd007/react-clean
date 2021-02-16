import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { makeAxiosHttpClient } from '@/main/factories/http/axios-http-client-factory'
import { makerApiUrl } from '@/main/factories/http/api-url-factory'
import { Authentication } from '@/domain/services/'

export const makerRemoteAuthenticate = (): Authentication => {
  return new RemoteAuthentication(makerApiUrl('/login'), makeAxiosHttpClient())
}
