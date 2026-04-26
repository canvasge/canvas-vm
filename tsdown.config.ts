import { defineConfig } from 'tsdown'

export default defineConfig({
    entry: 'src/canvas.ts',
    outDir: "dist/",
    dts: true,
    minify: true,
})