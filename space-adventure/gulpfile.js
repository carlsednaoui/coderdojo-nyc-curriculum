var gulp  = require('gulp'),
    zip   = require('gulp-zip'),
    clean = require('gulp-clean');

gulp.task('default', function () {
    gulp.src('lesson-*/end-result.zip', {read: false})
      .pipe(clean());
});
