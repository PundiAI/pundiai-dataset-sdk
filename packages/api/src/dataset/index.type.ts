/**
 * @title ai dataset server
 * @description ai dataset server
 * @swagger 2.0
 * @version v1.0
 */

export type Infer<T> = T extends { data?: infer V } ? V : void

export interface PageQueryDatasetPageOutput {
  currentPageNo?: number
  data?: QueryDatasetPageOutput[]
  pageSize?: number
  totalCount?: number
  totalPage?: number
}
export interface QueryDatasetDetailsOutput {
  /** @description nft contract */
  contractAddress?: string
  /** @description create time */
  createDt?: number
  /** @description modalities(text, image ...) */
  dataTypeList?: string[]
  /** @description dataset name */
  datasetName?: string
  /** @description file format */
  fileFormatList?: string[]
  /** @description file size */
  fileSize?: number
  /** @description hash */
  hash?: string
  /** @description language */
  languageList?: string[]
  /** @description license */
  license?: string
  /** @description number of rows */
  numberOfRows?: number
  /** @description owner address */
  ownerAddress?: string
  /** @description permissions private or public */
  permissions?: string
  /** @description source */
  source?: string
  /** @description task type(single_label, multi_label, entity_name, image_single_label, image_multi_label, image_border, ocr ...) */
  taskTypeList?: string[]
  /** @description nft tokenId */
  tokenId?: string
  /** @description update time */
  updateDt?: number
}
export interface QueryDatasetPageOutput {
  /** @description nft contract */
  contractAddress?: string
  /** @description dataset name */
  datasetName?: string
  /** @description file size */
  fileSize?: number
  /** @description hash */
  hash?: string
  /** @description owner address */
  ownerAddress?: string
  /** @description permissions private or public */
  permissions?: string
  /** @description nft tokenId */
  tokenId?: string
  /** @description update time */
  updateDt?: number
}
export interface RespPageQueryDatasetPageOutput {
  code?: number
  data?: PageQueryDatasetPageOutput
  msg?: string
}
export interface RespQueryDatasetDetailsOutput {
  code?: number
  data?: QueryDatasetDetailsOutput
  msg?: string
}
export interface GetV1ViewQueryDatasetDetailsQuery {
  /** @description nft contract */
  contractAddress: string
  /** @description nft tokenId */
  tokenId: string
}
export interface GetV1ViewQueryDatasetPageQuery {
  /** @description page size */
  pageSize: number
  /** @description page index starts from 1 */
  pageIndex: number
  /** @description dataset name */
  datasetName?: string
  /** @description address */
  address?: string
  /** @description address type (user address:0, owner address:1, owner or user address:2) */
  addressType?: number
  /** @description modalities(text, image ...) */
  datasetDataType?: string
  /** @description dataset format(.txt, .csv ...) */
  datasetFormat?: string
  /** @description file size from */
  fileSizeStart?: number
  /** @description file size to */
  fileSizeEnd?: number
  /** @description permissions private or public */
  permissions?: string
}
