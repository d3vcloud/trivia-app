import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		eslintPlugin() //Show ESLint errors in the browser
	],
})

//References absolute path: https://stackoverflow.com/questions/68241263/absolute-path-not-working-in-vite-project-react-ts
