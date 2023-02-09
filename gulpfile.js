const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const htmlmin = require("gulp-htmlmin");
const terser = require("gulp-terser");
const rename = require("gulp-rename");
const replace = require("gulp-replace");
const del = require("del");

const devScript =
  '<script src="js/main.js"></script><script src="js/weather.js"></script>';
const prodScript = '<script src="js/main.min.js"></script>';

gulp.task("distcss", () => {
  return gulp
    .src("src/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("dist/css"));
});

gulp.task("distjs", () => {
  return gulp
    .src("src/js/**/*.js")
    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("disthtml", () => {
  return gulp
    .src("src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(replace("css/main.css", "css/main.min.css"))
    .pipe(replace(devScript, prodScript))
    .pipe(rename("index.min.html"))
    .pipe(gulp.dest("dist"));
});

gulp.task("distclean", () => {
  return del(["dist"]);
});

gulp.task(
  "dist",
  gulp.series("distclean", gulp.parallel("distcss", "distjs", "disthtml"))
);

gulp.task("distlive", () => {
  browserSync.init({
    server: {
      baseDir: "dist",
      index: "index.min.html",
    },
    notify: false,
  });
});

gulp.task("production", gulp.series("dist", gulp.parallel("distlive")));

gulp.task("developmentcss", () => {
  return gulp
    .src("src/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

gulp.task("developmentclean", () => {
  return del(["src/css"]);
});

gulp.task("developmentlive", () => {
  browserSync.init({
    server: {
      baseDir: "src",
      index: "index.html",
    },
    notify: false,
  });

  gulp.watch("src/scss/**/*.scss", gulp.series("developmentcss"));
  gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
  gulp.watch("src/**/*.html").on("change", browserSync.reload);
});

gulp.task(
  "development",
  gulp.series(
    "developmentclean",
    gulp.parallel("developmentcss", "developmentlive")
  )
);
