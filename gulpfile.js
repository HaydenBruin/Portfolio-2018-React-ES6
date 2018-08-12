'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('./client/src/sass/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./client/src/css/'))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./client/src/css/min/'))
    ;
});

gulp.task('watch', function () {
    gulp.watch('./client/src/sass/**/*.scss', ['sass']);
});