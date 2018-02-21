'use strict';

var gulp = require('gulp'),
    gulpwatcher = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-cssmin'),
    notify = require("gulp-notify"),
    rigger = require('gulp-rigger'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload;

var consolidate = require('gulp-consolidate');
var yaml        = require('require-yaml');

var path = {
    build: {
        html: './dist',
        js: './dist/assets/js',
        style: './dist/assets/css',
        img: './dist/images'
    },
    src: {
        html: './src/html/*.html',
        js: './src/js/*.js',
        style: './src/sass/*.scss',
        img: './src/images/**/*.*'
    },
    watch: {
        html: './src/html/**/*.html',
        js: './src/js/*.js',
        style: './src/sass/*.scss',
        img: './src/images/**/*.*'
    }
};

// Browser Sync
var config = {
    server: {
        baseDir: 'dist'
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: 'Frontend-drugs'
};

gulp.task('webserver', function () {
    browserSync(config);
});

// HTML
gulp.task('html:build', function () {
    gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});


//Sass
gulp.task('style:build', function () {
    gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.style))
        .pipe(reload({stream: true}))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.style));
});

// JS
gulp.task('js:build', function () {
    gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path.build.js))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'html:build',
    'js:build',
    'style:build',
    'image:build',
    'list-pages'
]);

gulp.task('notify', function () {
    gulp.src(path.src.style)
        .pipe(notify("Откомпилил и собрал!"));
});

gulp.task('list-pages', function() {
 	delete require.cache[require.resolve('./src/list-pages/index.yaml')]
   var pages = require('./src/list-pages/index.yaml');
   return gulp
     .src('src/list-pages/index.html')
     .pipe(consolidate('lodash', {
       pages: pages
     }))
     .pipe(gulp.dest('dist'));
 });

// Watch for changes
gulp.task('watch', function () {
    gulpwatcher('./src/list-pages/index.yaml', function (event, cb) {
        gulp.start('list-pages');
    });
    gulpwatcher([path.watch.html], function (event, cb) {
        gulp.start('html:build');
    });
    gulpwatcher([path.watch.style], function (event, cb) {
        gulp.start('style:build');
    });
    gulpwatcher([path.watch.js], function (event, cb) {
        gulp.start('js:build');
    });
    gulpwatcher([path.watch.img], function (event, cb) {
        gulp.start('image:build');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);
