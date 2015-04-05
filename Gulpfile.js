var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    plumber      = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    size         = require('gulp-size'),
    pixrem       = require('gulp-pixrem'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

gulp.task('styles', function(){
  gulp.src(['app.scss', '_twelve.scss','./src/**/*.scss'])
  .pipe(plumber())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer('last 2 version'))
  .pipe(pixrem())
  .pipe(size())
  .pipe(gulp.dest('./app/'))
  .pipe(reload({stream: true}));
});

gulp.task('html', function(){
  gulp.src('./app/index.html')
  .pipe(plumber())
  .pipe(reload({stream: true}));
});

gulp.task('connect', function() {
  browserSync({
    server: {
      baseDir: './app'
    }
  });
});


gulp.task('watch', function(){
  gulp.watch(['app.scss', '_twelve.scss','./src/**/*.scss'], ['styles']);
  gulp.watch('./app/index.html', ['html']);
});

gulp.task('default', ['styles', 'connect', 'watch']);
