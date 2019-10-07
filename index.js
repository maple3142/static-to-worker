const path = require('path')
const fs = require('fs-extra')
const glob = require('glob-promise')
const LZString = require('lz-string')

const BASE = path.resolve(process.argv[2]).replace(/\\/g, '/')
const SCRIPT = fs.readFileSync(__dirname + '/script.js')
;(async () => {
	const list = await glob('/**/*.{html,js,css,json,xml}', {
		root: BASE,
		nodir: true
	})
	const paths = await Promise.all(
		list.map(async f => ({
			path: f.replace(BASE, ''),
			content: await fs.readFile(f, 'utf-8')
		}))
	)
	const code_of_files = paths
		.map(f => `\t${JSON.stringify(f.path)}: '${LZString.compressToBase64(f.content)}'`)
		.join(',\n')
	const HEAD = `const files = {\n` + code_of_files + `\n}`
	console.log('\n' + HEAD + '\n' + SCRIPT)
})()
