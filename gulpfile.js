var gulp = require('gulp');
var tinyping = require('gulp-tinypng-compress');

gulp.task('tinypng', function () {
    return gulp.src(['images-src/**/*.{png,jpg,jpeg}'],{base:'images-src/'})
        .pipe(tinyping({
            key: '' // TinyPNGのAPI Key
        }))
        .pipe(gulp.dest('images-min'));
});

gulp.task('default', ['tinypng']);