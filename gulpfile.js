var gulp = require("gulp");
var babel = require("gulp-babel");
var uglify = require('gulp-uglify');

gulp.task("default", function() {
    // ES6转ES5
    gulp.src("public/src/js/*.js")
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest("public/build"));
});

gulp.task("uglify", function() {
    // 代码文件混淆和最小化
    gulp.src("public/build/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("public/build"));
});