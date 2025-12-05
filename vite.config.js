// vite.config.js
import glsl from 'vite-plugin-glsl'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [glsl()],
	base: '/snake/', // GitHub Pages base path (your repo name)
})
