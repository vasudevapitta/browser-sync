# browser-sync
project on browser-sync


Install node js & npm
In commandline npm init to create package.json

Run npm install gulp browser-sync --save-dev //Installs gulp & browser-sync as dev dependencies to the project and creates node_modules folder
Also the package.json should show gulp & browser-sync under dependencies

create a file with name gulpfile.js add the below code to it

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


In commandline to run browser-sync Run gulp browser-sync //this should open a local server with browser-sync watching for file changes.
