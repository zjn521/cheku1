//1、加载gulp包
var gulp = require("gulp");
//引入sass插件对应的模块
var sass = require("gulp-sass");
//引入合并文件对应的模块
var concat = require("gulp-concat");
//引入压缩的模块
var uglify = require("gulp-uglify");
//引入重命名的模块
var rename = require("gulp-rename");
//引入压缩CSS的模块
var minifycss = require('gulp-minify-css');

//2、写个copy文件的任务
gulp.task("copy_index",function(){
//	gulp.src("index.html").pipe(gulp.dest("dist"));
	//把开发的代码部署到服务器上。
	gulp.src("*.html").pipe(gulp.dest("D:/phpStudy/WWW/apples"));
	gulp.src("php/*.php").pipe(gulp.dest("D:/phpStudy/WWW/apples/php"));
});

gulp.task("copy_img",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:/phpStudy/WWW/apples/img"));
});

gulp.task("copy_css",function(){
	gulp.src("css/*.css").pipe(gulp.dest("D:/phpStudy/WWW/apples/css"));
});

gulp.task("copy_js",function(){
	gulp.src(["js/*.js","js/*php"]).pipe(gulp.dest("D:/phpStudy/WWW/apples/js"));
});

gulp.task("build",["copy_js","copy_css","copy_img","copy_index"],function(){
	console.log("ok");
});

//

//sass编译任务
gulp.task("sass",function(){
	gulp.src("common.scss")//源文件
	.pipe(sass())//做sass预编译（做什么样的处理）
	.pipe(gulp.dest("css/"));//把结果放在何处。
	
});


//合并
gulp.task("concatJS",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest("dist/js"));
});

//合并并压缩
gulp.task("uglify",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))//合并
	.pipe(uglify())//压缩
	.pipe(gulp.dest("dist/js"));
});

//合并，压缩，重命名
gulp.task("concatuglifyrename",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))//合并
	.pipe(gulp.dest("dist/js"))
	.pipe(uglify())//压缩
	.pipe(rename("all.min.js"))
	.pipe(gulp.dest("dist/js"));
});


gulp.task("minifycss",function(){
	gulp.src("css/index.scss")
	.pipe(sass())
	.pipe(minifycss())//压缩
	.pipe(gulp.dest("dist/css"));
});


gulp.task("watchAll",function(){
	gulp.watch("*.html",["copy_index"]);
	gulp.watch("img/**/*",["copy_img"]);
	gulp.watch("css/*.css",["copy_css"]);
	gulp.watch("js/*.js",["copy_js"]);
});

