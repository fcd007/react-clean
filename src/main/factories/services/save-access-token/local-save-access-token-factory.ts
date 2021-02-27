import { makeLocalStorageAdapter } from '@/main/factories/cache/local-storage-token-factory'
import { LocalSaveAccessToken } from '@/data/usecases/'
import { SaveAccessToken } from '@/domain/usecases'

export const makerLocalSaveAccessToken = (): SaveAccessToken => {
  return new LocalSaveAccessToken(makeLocalStorageAdapter())
}
