var app = angular.module('niroWebApp', []);

//The Angular controller
app.controller('mainCtrl', function($scope) {
//The scoller method
$scope.navStatus=false;
    $scope.goToDiv = function(index) {
        if (index == 1) {
            $('html, body').animate({
                scrollTop: $('#sec1').offset().top
            }, 'slow');
        }
        if (index == 2) {
            $('html, body').animate({
                scrollTop: $('#sec2').offset().top
            }, 'slow');
        }
        if (index == 3) {

            $('html, body').animate({
                scrollTop: $('#sec3').offset().top
            }, 'slow');
        }
        if (index == 5) {

            $('html, body').animate({
                scrollTop: $('#sec5').offset().top
            }, 'slow');
        }
        if (index == 4) {
            $('html, body').animate({
                scrollTop: $('#sec4').offset().top
            }, 'slow');
        }
    }
//The mailing logic
	$scope.sendQuery = function(name,email,message){
		alert("message sent");
	}
//Mobile view icon function
$scope.toggleNav = function(){
	$scope.navStatus=!$scope.navStatus;	
	}

});


