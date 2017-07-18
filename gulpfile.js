var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');


var rutas = {
	rutaJS: './src/assets/js/*.js',
	rutaCSS: './src/assets/scss/*.scss',
	ruraHTML:'src/*.html'
};

gulp.task('prepararHTML', function(){
	gulp.src(rutas.ruraHTML)
		.pipe(gulp.dest('./public/'))
});
gulp.task('prepararJS', function(){
	gulp.src(rutas.rutaJS)
		.pipe(uglify())
		.pipe(gulp.dest('./public/assets/js/'))
});

gulp.task('prepararCSS', function(){
	gulp.src(rutas.rutaCSS)
		.pipe(sass({
		outputStyle:'compressed',
		precision: 3
	}).on('error', sass.logError))
		.pipe(gulp.dest('./public/assets/css/'))
});
