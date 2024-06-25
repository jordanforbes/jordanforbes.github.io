const gulp = require('gulp');
const git = require('gulp-git')

// // gulp.task =define tasks
// // gulp.src =point to files to use
// // gulp.dest = point to folder to output
// // gulp.watch = watch files and folders for changes

// // logs message
// gulp.task('message', async ()=>{
//     return console.log('gulp is running')
// })

// // Run git add
// // src is the file(s) to add (or ./*)
// // gulp.task('add', function(){
// //     return gulp.src('./*')
// //       .pipe(git.add());
// //   });

//   // Run git add with options
//   gulp.task('add', function(){
//     return gulp.src('./git-test/*')
//       .pipe(git.add({args: ' .'}));
//   });

//   // Run git commit with options
