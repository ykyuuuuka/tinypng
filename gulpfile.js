var gulp = require('gulp');
var tinyping = require('gulp-tinypng-compress');

gulp.task('tinypng', function () {
    gulp.src('./images-src/**/*.{png,jpg,jpeg}')
        .pipe(tinyping({
            key: '' // TinyPNGのAPI Key
        }))
        .pipe(gulp.dest('./images-min'));
});

gulp.task('default', ['tinypng']);