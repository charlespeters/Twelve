var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    plumber      = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    size         = require('gulp-size'),
    pixrem       = require('gulp-pixrem');

gulp.task('styles', function(){
  gulp.src(['app.scss', '_twelve.scss','./src/**/*.scss'])
  .pipe(plumber())
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(autoprefixer('last 2 version'))
  .pipe(pixrem())
  .pipe(size())
  .pipe(gulp.dest('css/'));
});


gulp.task('watch', function(){
  gulp.watch(['_twelve.scss','./src/**/*.scss'], ['styles']);
});

gulp.task('default', ['styles', 'watch']);
