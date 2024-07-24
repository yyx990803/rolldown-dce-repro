import { defineConfig } from 'rolldown'

export default defineConfig({
  input: 'index.js',
  plugins: [
    {
      name: 'replace',
      transform(code, id) {
        return code.replace(/__FOO__/g, 'true')
      }
    }
  ],
  treeshake: {
    moduleSideEffects: false
  }
})
