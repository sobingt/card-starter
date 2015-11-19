var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('minify',function(){
  gulp.src(['./js/card.js','./js/deck.js','./js/player.js','./js/main.js',])
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./js'))
});


gulp.task('default',['minify']);