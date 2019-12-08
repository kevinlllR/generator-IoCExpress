var gulp = require('gulp');
var rename = require('gulp-rename')

gulp.task('env', envTask);

function envTask(done) {

    switch (process.env.NODE_ENV) {
        case 'development': {
            gulp.src('./config/env/env.dev')
                .pipe(rename('env'))

                .pipe(gulp.dest('./config/env/'));
            done();
            break;
        };
        case 'production': {

            gulp.src('./config/env/env.prod')
                .pipe(rename('env'))
                .pipe(gulp.dest('./config/env/'))
            done()
            break;
        };
        case 'test': {

            gulp.src('./config/env/env.test')
                .pipe(rename('env'))
                .pipe(gulp.dest('./config/env/'))
            done()
            break;
        }
    }

}

