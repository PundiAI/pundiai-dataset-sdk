/**
 * @title ai dataset server
 * @description ai dataset server
 * @swagger 2.0
 * @version v1.0
 */

import type { AxiosRequestConfig } from 'axios'
import type * as Types from './index.type'
import http from './http.instance'

/**
 * @summary Dataset details
 * @method get
 * @tags v1 resource preview
 * @consumes application/json
 */
export function getV1ViewQueryDatasetDetails(params: Types.GetV1ViewQueryDatasetDetailsQuery, config?: AxiosRequestConfig) {
  const url = '/v1/view/queryDatasetDetails'
  return http.request<Types.Infer<Types.RespQueryDatasetDetailsOutput>>({ method: 'get', url, params, ...config })
}
/**
 * @summary Pagination query dataset
 * @method get
 * @tags v1 resource preview
 * @consumes application/json
 */
export function getV1ViewQueryDatasetPage(params: Types.GetV1ViewQueryDatasetPageQuery, config?: AxiosRequestConfig) {
  const url = '/v1/view/queryDatasetPage'
  return http.request<Types.Infer<Types.RespPageQueryDatasetPageOutput>>({ method: 'get', url, params, ...config })
}
