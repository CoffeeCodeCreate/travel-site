var gulp = require('gulp'), //the gulp package
//gulp-watch package, runs functions when it senses file changes.
watch = require('gulp-watch'),

browserSync = require('browser-sync').create();

gulp.task('watch', function(){
	//initialize browserSync web server
	browserSync.init({
		//turn notification button off
		notify: false,
		server: {
			
			baseDir: "app"
		}
	});
    watch('./app/index.html', function(){
    	gulp.start('html');
	});
	
	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('cssInject');
	});
});

//NOTE: the middle array parameter is the dependency task array
// before the cssInject task is run, it first runs all the tasks
// in this array.
gulp.task('cssInject',['styles'] ,function(){
	//take compiled css, pass it to browser sync, inject it into the browser on the fly
	gulp.src('./app/temp/styles/styles.css')
	//whatever we pipe into browser stream gets injected into the browser
	.pipe(browserSync.stream());
});