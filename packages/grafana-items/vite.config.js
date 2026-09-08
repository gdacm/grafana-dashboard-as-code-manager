import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        emptyOutDir: false,
        lib: {
            entry: 'src/index.js',
            formats: ['es'],
            fileName: (format) => `index.js`,
        },
        sourcemap: true,
        minify: false,
    },
});