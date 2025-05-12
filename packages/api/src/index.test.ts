import { describe, expect, it } from 'vitest'
import dotenv from 'dotenv'
import { DatasetApiClient } from './'

dotenv.config({ path: '.env' })

describe('@pundiai/dataset-api', () => {
  describe('datasetApiClient', () => {
    it('getV1ViewQueryDatasetDetails', async () => {
      const datasetApi = new DatasetApiClient({
        baseURL: process.env.VITE_SERVER_DATASET_URL,
        timeout: 30000,
      })
      const result = await datasetApi.methods.getV1ViewQueryDatasetDetails({
        tokenId: '20886',
        contractAddress: '0x7caCfff9A62eA2E92C504D665AB89d874fdfBAdF',
      })

      expect(result).toMatchSnapshot('getV1ViewQueryDatasetDetails')
    })
  })
})
