import alias from '@rollup/plugin-alias'
import commonjs from '@rollup/plugin-commonjs'
import css from "rollup-plugin-import-css";
import esbuild from 'rollup-plugin-esbuild'
import { fileURLToPath } from 'url'
import fs from 'fs'
import path from 'path'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

// import terser from '@rollup/plugin-terser';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const tmMetaPath = path.resolve(__dirname, 'tm-meta.txt')
const tmMeta = fs.readFileSync(tmMetaPath, 'utf8')

export default {
    input: 'src/index.tsx',
    output: [
        {
            file: 'dist/index.cjs',
            format: 'cjs',
            banner: tmMeta,
            generatedCode: {
                constBindings: true
            },
        }
    ],
    plugins: [
        resolve({ browser: true }),
        commonjs(),
        typescript({ tsconfig: './tsconfig.json' }),
        alias({
            entries: [
                { find: '@', replacement: path.resolve(__dirname, 'src') }
            ]
        }),
        css({ minify: true }),
        esbuild({
            include: /\.[jt]sx?$/,
            minify: process.env.NODE_ENV === 'production',
            target: 'esnext',
            jsxFactory: 'h',
            jsxFragment: 'Fragment'
        }),
        // terser()
    ]
}
