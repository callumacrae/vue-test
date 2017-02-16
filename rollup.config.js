import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  sourceMap: true,
  plugins: [
    babel({
      presets: ['es2015-rollup'],
      babelrc: false
    }),
    nodeResolve({
      jsnext: true,
      main: true,
      skip: ['vue']
    }),
    commonjs()
  ],
  format: 'umd',
  moduleName: 'vueTest'
};
