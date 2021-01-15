import { HttpPostParams } from '@/data/protocols/http'
import axios from 'axios'

export class AxiosHttpCLient {
  async post (params: HttpPostParams<any>): Promise<void> {
    await axios(params.url)
  }
}
