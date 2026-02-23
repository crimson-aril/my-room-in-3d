import { defineConfig } from 'vite'
import glsl from 'vite-plugin-glsl'
import { resolve } from 'path'

export default defineConfig({
    base:'/my-room-in-3d/',
    root: 'src',
    publicDir: '../static',

    server: {
        host: true,
        open: true
    },

    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true
    },

    plugins: [
        glsl()
    ],

    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        }
    }
})