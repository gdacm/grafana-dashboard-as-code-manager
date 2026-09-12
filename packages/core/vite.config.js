import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            formats: ['es'],
            fileName: (format) => `index.js`,
        },
        target: 'node18',
        rollupOptions: {
            external: [
                'fs', 
                'fs/promises', 
                'path', 
                'crypto', 
                'yaml',
                /^@gdacm\//
            ],

        },
        sourcemap: true,
        minify: false,
    },
});