/**
 * Created by arlex on 2017/10/19.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve',function () {
    browserSync({
        server:{
            baseDir: 'app'
        }
    });
    gulp.watch(['*.html','css/**/*.css','js/**/*.js'],{cwd:'app'},reload);
});