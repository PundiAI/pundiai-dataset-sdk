import type { AxiosRequestConfig } from 'axios'
import type * as TypeApi from './dataset/index'
import * as Api from './dataset/index'
import http from './dataset/http.instance'

export class DatasetApiClient {
  public methods: typeof TypeApi

  constructor(config?: AxiosRequestConfig) {
    Object.assign(http.defaults, config)

    this.methods = Api
  }
}
