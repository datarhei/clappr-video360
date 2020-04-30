import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

const name = 'Video360';
const output = [
    {file: 'dist/clappr-video360.js', format: 'umd', name, globals: {'clappr': 'Clappr'}}
];

export default {
  input: 'src/index.js',
  output,
  external: ['clappr'],
  acorn: {
    allowReserved: true,
  },
  plugins: [
    nodeResolve({
      jsnext: true,
      browser: true,
    }),
    commonjs(),
    babel({ babelHelpers: 'inline' }),
  ]
};
