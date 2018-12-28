/* Modules
------------------------------------- */
var gulp          = require('gulp'),
// Tools
watch         = require('gulp-watch'),
rename        = require("gulp-rename"),

// Styles
sass          = require('gulp-sass'),
autoprefixer  = require('gulp-autoprefixer'),

// Prevent watch from crashing on errors
plumber       = require('gulp-plumber'),


gulp_src      = gulp.src;

gulp.src = function() {
 return gulp_src.apply(gulp, arguments)
.pipe(plumber(function(error) {
  console.log(error);
  this.emit('end');
    })
  );
};


/* Paths
------------------------------------- */
var paths = {
 scss: './scss/',
 css: './Content/',
 templates: './scss/templates/'
}


// Autoprefixer Task
gulp.task('autoprefix', function () {
gulp.src(paths.css + 'application.css')
});



// Sass Task
gulp.task('sass',  function () {

gulp.src(paths.scss + 'application.scss')
.pipe(sass({indentedSyntax: true}))

//Autoprefixer
.pipe(autoprefixer({
    browsers: ['> 2%'],
    cascade: false
}))
.pipe(gulp.dest(paths.css))

});


 /* METHOD ------------------------------------- */

// Watch Task
gulp.task('watch', function () {
gulp.watch(paths.scss+'**/*.scss', ['sass']);
});

//
// DEFAULT
gulp.task('default' , ['watch']);