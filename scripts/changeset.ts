import process from 'node:process'
import { $ } from 'zx'

process.env.FORCE_COLOR = '1'

async function main() {
  await $`changeset`
  await $`git add ./`
  await $`git commit -m "chore: changeset add"`
}

main()
