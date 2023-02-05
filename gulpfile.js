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

gulp.task("buildcss", () => {
  return gulp
    .src("src/scss/main.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(rename("main.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("buildjs", () => {
  return gulp
    .src("src/js/**.js")
    .pipe(concat("main.min.js"))
    .pipe(terser())
    .pipe(gulp.dest("build/js"));
});

gulp.task("buildhtml", () => {
  return gulp
    .src("src/index.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(replace("css/main.css", "css/main.min.css"))
    .pipe(replace(devScript, prodScript))
    .pipe(rename("index.min.html"))
    .pipe(gulp.dest("build"));
});

gulp.task("buildclean", () => {
  return del(["build"]);
});

gulp.task(
  "build",
  gulp.series("buildclean", gulp.parallel("buildcss", "buildjs", "buildhtml"))
);

gulp.task("buildlive", () => {
  browserSync.init({
    server: {
      baseDir: "build",
      index: "index.min.html",
    },
    notify: false,
  });
});

gulp.task("production", gulp.series("build", gulp.parallel("buildlive")));
