import process from 'process'
import { $ } from 'zx'

process.env.FORCE_COLOR = '1'

async function main() {
  await $`rimraf packages/*/dist`
  await $`turbo run release:pre --parallel`
  await $`changeset publish`
  await $`git push --tags`
}

main()
