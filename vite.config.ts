// @ts-nocheck
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md';

import fs from 'fs'
import {baseParse} from '@vue/compiler-core'

const demoPlugin = {
  name: 'demo',
  transform: (code, path) => {
    const file = fs.readFileSync(path).toString()
    const parsed = baseParse(file).children.find(n => n.tag === 'demo')
    const title = parsed.children[0].content
    const main = file.split(parsed.loc.source).join('').trim()
    return `export default function (Component) {
      Component.__sourceCode = ${
      JSON.stringify(main)
      }
      Component.__sourceCodeTitle = ${JSON.stringify(title)}
    }`.trim()
  }
}

export default {
  // base: './',
  assetsDir: 'assets',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  server: {
    port: 8880,
  },
};
