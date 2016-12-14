var express = require('express');
var app 	= express();
var morgan 	= require('morgan');
var serverPort 	= 8200;
var gulp 	= require('gulp');
var livereload = require('gulp-livereload');
var bodyParser = require("body-parser");
var nodemailer	= require('nodemailer');


app.use(bodyParser.json())
	.use(bodyParser.urlencoded({
		extended : true
	}))
	.use(morgan('dev'));


gulp.task('scripts', function(){
	gulp.src('**/*.js')
	.pipe(livereload());
});

gulp.task('styles', function(){
	gulp.src('**/*.css')
		.pipe(livereload());
	console.log('styles has run');
});

gulp.task('lessStyles', function(){
	gulp.src('**/*.less')
		.pipe(livereload());
	console.log("Less has been compilied");	
});

gulp.task('structure', function(){
	gulp.src('**/*.html')
		.pipe(livereload());
	console.log('your structure should reload');	
});


gulp.task('watch', function(){
	livereload.listen();
  gulp.watch('**/*.js', ['scripts']);
  gulp.watch('**/*.css', ['styles']);
  gulp.watch('**/*.html', ['structure']);
});


gulp.task('default', ['scripts', 'styles', 'structure', 'watch']);

var smtpConfig = { 
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: 'mrterry06@gmail.com',
		pass: ''
	}
};

var transporter = nodemailer.createTransport(smtpConfig);
	
	
 app.post('/mail', function(req, res){

 	var mailOption = {
	from: req.body.name,
	to: 'mrterry06@gmail.com',
	subject: req.body.subject ,
	text: req.body.email,
	html: req.body.content
};

	transporter.sendMail(mailOption, function(err, info){
		if(err){
		console.log(err);res.send(false);
		}else{console.log('Message sent: ' + info.response );
		res.send(true);
		}
	});
	
});


app.use(express.static(__dirname +'/mySite'))
	.listen( process.env.PORT || serverPort, function(){
		console.log("Your server is up and running on port" + serverPort);
	});
