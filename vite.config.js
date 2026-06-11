const path = require('path')
const { defineConfig } = require('vite')
const react = require('@vitejs/plugin-react')

module.exports = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^react-transition-group\/TransitionGroupContext$/,
        replacement: path.resolve(__dirname, 'node_modules/react-transition-group/esm/TransitionGroupContext.js')
      },
      {
        find: /^react-transition-group$/,
        replacement: path.resolve(__dirname, 'node_modules/react-transition-group/esm/index.js')
      }
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    include: ['src/**/*.{test,spec}.{js,jsx,ts,tsx}']
  }
})
