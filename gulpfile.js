//
// Dependencies
//
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');

//
// Tasks
//

// Compile SASS
gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Uglify CSS
gulp.task('cssnano', function() {
    return gulp.src('css/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/min'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Spin up server and use browser sync
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
});

// Start watching for development
gulp.task('watch', ['browserSync', 'sass', 'cssnano'], function() {
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('css/*.css', ['cssnano']);
    gulp.watch('*.html', browserSync.reload);
});

// Runs on 'GULP'
gulp.task('default', function (callback) {
    runSequence(['sass', 'cssnano', 'browserSync', 'watch'],
        callback
    )
});
