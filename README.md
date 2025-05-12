# Pundiai Dataset Sdk

## SDK based on monorepo project architecture of pnpm workspace and changeset.

### Dataset API Client Usage Guide

#### Basic Usage

##### Initialize the client

```typescript
import { DatasetApiClient } from '@pundiai/dataset-api'

const datasetApi = new DatasetApiClient({
  baseURL: 'https://api.example.com', // Required parameters
  timeout: 30000 // Optional parameters
})

const result = await datasetApi.methods.getV1ViewQueryDatasetDetails({
  tokenId: '20886',
  contractAddress: '0x7caCfff9A62eA2E92C504D665AB89d874fdfBAdF',
})
```
