const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default',['parise'], () =>{
	gulp.watch(['src/**/*.es','!src/public/*/*.es'],['parise'])
	}
);
gulp.task('parise', () =>{
	return    gulp.src(['src/**/*.es','!src/public/*/*.es'])
			.pipe(babel({
				presets: ["es2015","stage-0"]
			}))
			.pipe(gulp.dest('./build'))

	}
	
);