const { src, dest, series, watch }  = require('gulp');
const sass                          = require('gulp-sass');
const del                           = require('del');
const autoprefixer                  = require('gulp-autoprefixer');
const sync                          = require('browser-sync').create();
// const imagemin                      = require('gulp-imagemin');

function html() {
  return src('src/**.html')
    .pipe(dest('dist'));
}

function img() {
  return src('src/img/*')
    .pipe(dest('dist/img'))
}

function js() {
  return src('src/js/**.js')
    .pipe(dest('dist/js'));
}

function css() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest('dist/css'));
}

function clear() {
  return del('dist');
}

function serve() {
  sync.init({
    server: './dist',
  });


  watch('src/**.html', series(html)).on('change', sync.reload);
  watch('src/scss/**.scss', series(css)).on('change', sync.reload);
  watch('src/js/**.js', series(js)).on('change', sync.reload);
}


exports.html = html;
exports.css = css;
exports.img = img;
exports.js = js;
exports.clear = clear;
exports.build = series(clear, css, html, img, js);
exports.serve = series(clear, css, html, img, js, serve);