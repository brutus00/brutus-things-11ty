const { src, dest, task, watch, parallel } = require('gulp');

const dev = process.env.NODE_ENV == 'development';

// scss
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const rename = require('gulp-rename');
const src_scss = './src/styles/**/*.scss';

sass.compiler = require('sass');

function scss() {
  return src(src_scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([
      postcssPresetEnv(),
      !dev ? cssnano() : () => undefined
    ]))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('./dist/styles'));
}
task('scss-task', () => scss());
task('scss', () => { watch(src_scss, scss); });

// gulp
exports.default = parallel('scss');
