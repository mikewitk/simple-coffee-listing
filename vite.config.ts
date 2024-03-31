import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  files: ['**/*.test.ts'],
  plugins: [react(), '@vitest/plugin-ts'],
})
