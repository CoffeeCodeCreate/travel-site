var gulp = require('gulp'),
postcss = require('gulp-postcss'),
//auto prefixer for css
autoprefixer = require('autoprefixer'),
//postcss module allowing us to use variables in css
cssvars = require('postcss-simple-vars'),
//allows us to nest our css
nested = require('postcss-nested'),
//allows us to import multiple css files to then compile it into one
cssImport = require('postcss-import');

gulp.task('styles', function(){
        //the source of our main style file
    return gulp.src("./app/assets/styles/styles.css")
        //the manipulations we do on those files
        .pipe(postcss([cssImport,nested,cssvars,autoprefixer]))
        //error handling
        .on('error', function(errorInfo){
            //print out the error message
            console.log(errorInfo.toString());
            //take this stream, emit to gulp when the task has come to an end.
            this.emit('end');
        })
        //send the compiled file to this destination
		.pipe(gulp.dest('./app/temp/styles'));

});