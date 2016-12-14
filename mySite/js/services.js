angular.module('scottJs.services', ['angularModalService'])


.factory('homeService', function(ModalService){
//	var resumeModal;
	


	 // ModalService.showModal({
  //           templateUrl: 'templates/home/modal-templates/resume-modal.html',
  //           controller: function($scope){

  //           }
  //       }).then(function(modal) {
  //           resumeModal = modal.element.modal();
  //           modal.close.then(function(result) {
  //               $scope.message = "You said " + result;
  //           });
  //       });



	return {

		openModalInstance: function(data, ctrl){
				console.log(data);
				  ModalService.showModal({
		            templateUrl: data,
		            controller: ctrl
		        }).then(function(modal) {
		            modal.element.modal();
		            modal.close.then(function(result) {
		                $scope.message = "You said " + result;
		            });
		        });
			

		}







	}



})

.factory('resumeService', function(){


	var resume = [
			{
				name: "Sk Model Management" ,
				year: 2013,
				url: "https://www.skmodels.biz",
				tech:  ["Wordpress", "PHP", "CSS", "HTML"]
			},		{
				name: "Clic Photography",
				year:  2014,
				url: 'https://www.clic.Photography',
				tech: ["Wordpress", "PHP", "CSS", "HTML", "Javascript"]
			},		{
				name: "Quad Cities Alliance for Immigrants and Refudgess" ,
				year: 2016,
				url: "http://www.qcair.org",
				tech: ["Angular.Js"," Node.js", "Express.js", "Twitter Bootstrap"," LESS", " MongoDb", "Mongo.Js", "HTML", "Bcrypt.js", "Nodemailer", "Gulp.Js", , "Javascript"]
			}, 		{
				name: "ManageU" ,
				year:2016 ,
				url: "N/A" ,
				tech: ["Angular.Js"," Node.js", "Express.js", "Twitter Bootstrap"," LESS", " MongoDb", "Mongo.Js", "HTML", "Bcrypt.js", "Nodemailer", "Gulp.Js", , "Javascript"]
			}, 		{
				name: "MyJitas",
				year: 2014 ,
				url: "N/A",
				tech: ["HTML", "CSS", , "Javascript"]
			}
			];

	// 	{
	// 	name: ,
	// 	year: ,
	// 	url: ,
	// 	tech: []
	// }

		return {

			workHistory: resume,

			urlConfirmation: function(url){

				var expression = /^(http:\/\/|https:\/\/)?(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?$/g;
				if(expression.test(url)) return true;
				
				return false;

			}
		}	



})

.factory('articleService', function(){

	return [{
		name: 'Javascript',
		img: 'img/articleImages/javascript.png',
		url: '#'
		},{
		name: "Google's Angularjs",
		img: 'img/articleImages/AngularJ.png',
		url: '#'
		},{
		name: 'NodeJs/ExpressJs',
		img: 'img/articleImages/node-express.png',
		url: '#'
		},{
		name: "Twitter's Bootstrap",
		img: 'img/articleImages/bootstrap.png',
		url: '#'
		},{
		name: "Sass(Syntatically Awesome StyleSheet)",
		img: 'img/articleImages/sass.svg',
		url: "#"	
		},{
		name: "Data Structures",
		img: "img/articleImages/data-structures.png",
		url: "#"	
		}];

	// ,{
	// 	name: '',
	// 	img: '',
	// 	url: '#'
	// }



});