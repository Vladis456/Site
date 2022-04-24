const gulp = require('gulp')
const sass  = require('gulp-sass')(require('sass'))
const sourcemaps = require('gulp-sourcemaps')
const watch = require('gulp-watch')
const autoprefixer = require('gulp-autoprefixer');

// Авто-префиксы
exports.prefix    = () => (
	gulp.src('css/main.css')
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
	.pipe(gulp.dest('./css/'))
);

// Компиляция scss в css
gulp.task('sass-compile', function(){
	return gulp.src('./scss/**/main.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().once('error', sass.logError))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('./css/'))
	
})

// Компиляция в реальном времени
gulp.task('watch', function(){
	gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})