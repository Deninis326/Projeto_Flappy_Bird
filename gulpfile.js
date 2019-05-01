const gulp = require('gulp')
const plumber = require('gulp-plumber')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
const watch = require('gulp-watch')

// Soucer Path
const js_src = './src/js/*.js'      // Pasta a qual ele irá pegar os scripts

// Dist Path
const js_dist = './js_gulp'         // Pasta de destido dos scripts tratados
const js_dist_name = 'scripts.js'   // No do arquivo com os scripts tratados

// Minify e Concat Scripts
gulp.task('scripts', function() {
    return gulp.src(js_src)
        .pipe(plumber())
        .pipe(uglify())             
        .pipe(concat(js_dist_name)) 
        .pipe(gulp.dest(js_dist))
})