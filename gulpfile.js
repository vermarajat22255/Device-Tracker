const gulp = require("gulp");
const concatenate = require("gulp-concat");
const cleanCSS = require("gulp-clean-css");
const autoPrefix = require("gulp-autoprefixer");
const gulpSASS = require("gulp-sass");
const rename = require("gulp-rename");
const imagemin = require("gulp-imagemin");
//"./src/styles/bootstrap/scss/_variables.scss"

const sassFiles = "./public/css/*";
const jsFiles = "./public/js/*";

gulp.task('sass', function(done) {
    gulp
        .src(sassFiles)
        .pipe(gulpSASS())
        .pipe(concatenate("styles.css"))
        .pipe(gulp.dest("./public/gulp/css/"))
        .pipe(
            autoPrefix({
                browsers: ["last 2 versions"],
                cascade: false
            })
        )
        .pipe(cleanCSS())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("./public/gulp/css/"));
    done();
});

gulp.task('js', function(done) {
    gulp
        .src(jsFiles)
        .pipe(concatenate("vendor.min.js"))
        .pipe(gulp.dest("./public/gulp/js/"));
    done();
});
gulp.task("build", gulp.parallel(["sass", "js"]))

gulp.task('watch', function(done) {
    gulp.watch(cssFiles, gulp.series('css'));
    gulp.watch(jsFiles, gulp.series('js'));
    done();
});

gulp.task('default', gulp.series('build'));