import process from 'process'
import { $ } from 'zx'

process.env.FORCE_COLOR = '1'

async function main() {
  await $`changeset version`
  await $`git add ./`
  await $`git commit -m "chore: changeset version"`
}

main()
