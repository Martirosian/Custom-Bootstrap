var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	dedupe = require('postcss-discard-duplicates'),
	postcss = require('gulp-postcss'),
	csscomb = require('gulp-csscomb'),
	scss = require('postcss-scss'),
	sass = require('gulp-sass');

gulp.task('watch', ['sass'], function (){
  gulp.watch('sass/**/*.scss', ['sass']); 
})

gulp.task('prettycss', function () {
	return gulp.src(['sass/**/*.css', 'sass/**/*.scss', '!sass/bootstrap/**/*.scss'], {base: './'})
		.pipe(postcss([
			autoprefixer({browsers: ['last 4 versions']}),
			dedupe
		], {syntax: scss}))
		.pipe(csscomb())
		.pipe(gulp.dest('./'));
});

gulp.task('sass', function() {
  return gulp.src('sass/**/*.scss') // Gets all files ending with .scss in scss
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
});
