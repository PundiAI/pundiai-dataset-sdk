import { defineConfig } from '@genapi/core'
import { axios } from '@genapi/presets'
import docs from './docs/dataset.json'

export default defineConfig({
  pipeline: axios.ts,

  input: { json: docs },
  output: {
    main: 'src/dataset/index.ts',
    type: 'src/dataset/index.type.ts',
  },
  import: {
    http: './http.instance',
  },
  // customize the output response type. default 'T'
  responseType: 'T extends { data?: infer V } ? V : void',
})
