'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');




exports.less = function () {
        return gulp.src('./css/style.less')
            .pipe(less())
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(gulp.dest('./dist'));
    }




exports.watch = function () {
    gulp.watch('./css/*.less', gulp.series('less'));
};