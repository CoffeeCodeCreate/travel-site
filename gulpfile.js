//This will import the gulp task files from other folders and run it here, the main gulp file.
//NOTE .js extension is not needed
require('./gulp/tasks/styles');
require('./gulp/tasks/watch');





//Gulp notes
/*
	gulp.src() -> The source of the files we want to manipulate

	gulp.dest() -> Where we want to send these files

	.pipe() -> Used to manipulate the file as it moves to its destination


*/