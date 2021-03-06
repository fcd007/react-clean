import axios, { AxiosResponse } from 'axios'

import { HttpPostClient, HttpPostParams, HttpResponse } from '@/data/protocols/http'

export class AxiosHttpCLient implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    let httpResponse: AxiosResponse<any>
    try {
      httpResponse = await axios.post(params.url, params.body)
      return {
        statusCode: httpResponse.status,
        body: httpResponse.data
      }
    } catch (error) {
      httpResponse = error.response
    }

    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
