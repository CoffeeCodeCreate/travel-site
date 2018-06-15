var gulp = require('gulp'); //the gulp package
//gulp-watch package, runs functions when it senses file changes.
var watch = require('gulp-watch'); 
//CSS Preprocessor
var postcss = require('gulp-postcss');


//default gulp tasks, runs by just typing gulp into the terminal
gulp.task('default', function(){
	console.log("IT WORKS MY GUY");
});


gulp.task('html', function(){
	console.log("I'm doing something to your html rn...");
});

gulp.task('styles', function(){
	return gulp.src("./app/assets/styles/styles.css")
		.pipe()
		.pipe(gulp.dest('./app/temp/styles'))

});


gulp.task('watch', function(){
    watch('./app/index.html', function(){
    	gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});
});


//Gulp notes
/*
	gulp.src() -> The source of the files we want to manipulate

	gulp.dest() -> Where we want to send these files

	.pipe() -> Used to manipulate the file as it moves to its destination


*/