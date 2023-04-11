import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/main.js',
  moduleContext: 'leaflet-easyprint',
  output: [
      { file: "dist/bundle.js", format: "umd" },
  ],
  plugins: [ 
    resolve(),
    babel({
      exclude: 'node_modules/**'
    }),
    terser(),
    commonjs()
  ],
};