const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['css/*.css', './*.html', 'js/*.js' ]).on("change", reload);
});