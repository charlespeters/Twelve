var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    plumber      = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    connect      = require('gulp-connect');

gulp.task('styles', function(){
    gulp.src('src/twelve/**/*.scss')
        .pipe(plumber())
        .pipe(sass({outputStyle: 'compressed', sourceComments: 'map'}))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/css/'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch('src/twelve/**/*.scss', ['styles']);
    gulp.watch(['src/index.html'], ['html']);
});

gulp.task('connect', function() {
    connect.server({ root: 'dist', livereload: true });
});


gulp.task('default', ['html', 'styles', 'watch', 'connect']);
