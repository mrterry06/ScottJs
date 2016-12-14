angular.module('scottJs.controllers', ['scottJs.services', 'ngAnimate'])

.controller('homeCtrl', function($scope, $state, homeService){
	$scope.employeed = "Xymmetrix";

	$scope.test = {}

	$scope.currentSubView = "Select A View"

	$scope.openModal = function(data, ctrl){

		homeService.openModalInstance(data, ctrl);
	}


	$scope.changeSubView = function(view){
		if (view == 'employeed'){
			$scope.currentSubView = "Who am I?";
		} else if (view == 'current') {
			$scope.currentSubView = "What's New?";
		} else {
			$scope.currentSubView = "Wanna Learn Something?"
		}

		$scope.navSelect = view;
	}

	$scope.test.options = {
	  chart:{
	    type: 'pieChart',
	    height: 100,
	    x: function(d){ return d.key;},
	    y: function(d){ return d.y; },
	    showLabels: true,
	    duration: 500,
	    labelThreshold: 0.01,
	    labelSunBeamLayout: true,
	    width: 100,
	    title: "We Did It!",
	    donut: true,
	    legend: {
	      margin: {
	        top: 5,
	        right: 0,
	        bottom: 5,
	        left: 0
	      }
	    }
	  }
	}

	$scope.test.data = [{key: "One", y:5}, 
	{key:"Two", y:2}, {key:"Three", y:9}, 
	{key:"Four", y:7}, {key:"Five", y:4}, 
	{key:"Six", y:3}, {key:"Seven", y:.5}];


})


//Modal Controllers Below Here

.controller('modalResumeCtrl', function($scope, resumeService){

	$scope.history = resumeService.workHistory;





	$scope.goToSite = function(project){


		resumeService.urlConfirmation(project.url) ? window.open(project.url, '_blank') :  $scope.noLonger = project.name;

	}


})

.controller('articlesCtrl', function($scope, articleService){
	$scope.hello = "Hello we are testing to see if this is true";

	$scope.articles = articleService;
})

.controller('currentCtrl', function($scope){
	$scope.test = "Hey this is a test of the system";
})

.controller('selfCtrl', function($scope){
	$scope.testSelf = "You really need to stfu";

})

.controller('contactCtrl', function($scope, $http){

	

	$scope.submit = function(){
	   	var expression = /\S/g;
	   	$scope.response = "";
	   	var formValidated = true;


	   	for (var key in $scope.mail){
	   		if(key === 'content' || key === 'subject'){
	   			continue;
	   		}

	   		if (expression.test($scope.mail[key]) === undefined || expression.test($scope.mail[key]) == false){
	   			formValidated = false;
	   			break;
	   		}
	   	}

	    if (formValidated){
	   		console.log('Some fields are empty');
	   		$scope.response = "Some fields or invalid."
	   } else {
		   $http.post('/mail', $scope.mail)
		   .then(function(response){

		   		$scope.response = "Your message a been successfully submitted. I shall be back with you all soon";
		   		
		   });
		  
	   }
	};

});

