var gulp = require('gulp'); //the gulp package
//gulp-watch package, runs functions when it senses file changes.
var watch = require('gulp-watch'); 
//CSS Preprocessor -> postCSS
var postcss = require('gulp-postcss');
//auto prefixer for css
var autoprefixer = require('autoprefixer');
//postcss module allowing us to use variables in css
var cssvars = require('postcss-simple-vars');
//allows us to nest our css
var nested = require('postcss-nested');
//allows us to import multiple css files to then compile it into one
var cssImport = require('postcss-import');


//default gulp tasks, runs by just typing gulp into the terminal
gulp.task('default', function(){
	console.log("IT WORKS MY GUY");
});


gulp.task('html', function(){
	console.log("I'm doing something to your html rn...");
});

gulp.task('styles', function(){
	return gulp.src("./app/assets/styles/styles.css")
		.pipe(postcss([cssImport,nested,cssvars,autoprefixer]))
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