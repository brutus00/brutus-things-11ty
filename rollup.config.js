import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const dev = process.env.NODE_ENV == 'development';

// js bundler
function jsBundle(filename) {
  return {
    input: `./src/scripts/${ filename }.js`,
    output: {
      file: `./dist/scripts/${ filename }.min.js`,
      format: 'iife'
    },
    plugins: [!dev && terser()]
  }
}

// svelte bundler
function svelteBundle(filename, svelteOptions) {
  return {
    input: `./src/scripts/${ filename }.js`,
    output: {
      format: 'iife',
      file: `./dist/scripts/${ filename }.bundle.js`
    },
    plugins: [
      svelte({ dev: dev, ...svelteOptions }),
      resolve({ dedupe: ['svelte'] }),
      commonjs(),
      !dev && terser(),
    ]
  }
}

export default [
  // main.js
  jsBundle('main'),
  jsBundle('netlify-cms'),
];
