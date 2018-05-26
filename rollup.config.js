import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

const banner = `/*!
 * clipboard.js v${pkg.version}
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */`;

const basePlugins = [
  babel({
    exclude: 'node_modules/**'
  }),
  nodeResolve({}),
  commonjs()
];

export default [
  {
    input: 'src/clipboard.js',
    output: {
      file: 'dist/clipboard.js',
      format: 'umd',
      name: 'ClipboardJS',
      banner
    },
    plugins: basePlugins
  },
  {
    input: 'src/clipboard.js',
    output: {
      file: 'dist/clipboard.min.js',
      format: 'umd',
      name: 'ClipboardJS',
      banner
    },
    plugins: [
      ...basePlugins,
      uglify({
        output: {
          comments: (node, {value, type}) => type == 'comment2' && value.startsWith('!')
        }
      })
    ]
  }
]
