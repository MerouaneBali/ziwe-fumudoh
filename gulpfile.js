var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var browserSync = require("browser-sync").create();

function buildStyles() {
  return gulp
    .src("./public/scss/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./public/css"))
    .pipe(browserSync.stream());
}

function buildLayoutStyles() {
  return gulp
    .src("./public/scss/layouts/**/*.scss")
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(gulp.dest("./public/css/layouts"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
    online: true,
    tunnel: true,
    notify: false,
  });

  gulp.watch("./public/*.html").on("change", browserSync.reload);

  gulp
    .watch("./public/scss/**/*.scss")
    .on("change", buildStyles, browserSync.reload);

  gulp
    .watch("./public/scss/layouts/**/*.scss")
    .on("change", buildLayoutStyles, browserSync.reload);

  gulp.watch("./public/js/**/*.js").on("change", browserSync.reload);
}

exports.buildStyles = buildStyles;
exports.watch = watch;
