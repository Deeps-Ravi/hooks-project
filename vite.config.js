import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // Use relative base path so it works on GitHub Pages under /hooks-project/
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        bowling: resolve(__dirname, 'bowling.html'),
        arcade: resolve(__dirname, 'arcade.html'),
        gallery: resolve(__dirname, 'gallery.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    }
  }
})
