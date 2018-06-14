var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("IT WORKS MY GUY");
});


gulp.task('html', function(){
	console.log("I'm doing something to your html rn...");
});


gulp.task('watch', function(){
    watch('./app/index.html', function(){
    	gulp.start('html');
    });
});
