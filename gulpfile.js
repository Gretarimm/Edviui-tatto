var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch');

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost/Projektai1/Edviui/",
    });
});

gulp.task('sass', function () {
  gulp.src('sass/**/*.scss')
    .pipe(sass({
        outputStyle:'compressed',
    })
    .on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
     }))
    .pipe(gulp.dest('./css'));
});


gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('sass/*.scss', ['sass']).on("change", browserSync.reload);
    gulp.watch('sass/**/*.scss', ['sass']).on("change", browserSync.reload);
    gulp.watch('js/*.js', ['js']).on("change", browserSync.reload);
    gulp.watch('index.php').on("change", browserSync.reload);
});


var jsInput = {
    js: 'js/dev/**/*.js'
}

var jsOutput = 'js/dist/';


gulp.task('js', function(){
  return gulp.src(jsInput.js)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/dist/'))
});

gulp.task('default',['sass', 'browser-sync','watch', 'js']);