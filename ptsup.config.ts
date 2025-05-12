import { defineConfig } from 'ptsup'

const config = defineConfig({
  entry: ['src/index.ts'],
  target: 'es2018',
  dts: { enable: true },
  clean: true,
})

export default config
