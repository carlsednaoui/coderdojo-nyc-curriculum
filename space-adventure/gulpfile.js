var fs    = require('fs'),
    path  = require('path'),
    gulp  = require('gulp'),
    zip   = require('gulp-zip'),
    clean = require('gulp-clean');

function getFolders(dir){
  return fs.readdirSync(dir)
    .filter(function(file){
      return fs.statSync(path.join(dir, file)).isDirectory();
    });
}

gulp.task('default', function () {
  var folders = getFolders('./');

  // remove the node_modules folder from the list of folders
  var node_modules = folders.indexOf('node_modules');
  folders.splice(node_modules,1);

  folders.map(function(folder) {
    gulp.src(folder + '/end-result.zip', {read: false})
      .pipe(clean());

    gulp.src(folder + '/end-result/*')
      .pipe(zip('end-result.zip'))
      .pipe(gulp.dest(folder));
  });

});
