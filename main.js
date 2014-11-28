var app = angular.module('myApp',[]).
		controller('costController', function($scope) {
			// $scope.ready= false;
			$scope.mealPrice ="" ;
			$scope.mealTax = 0.05;
			$scope.tipPercent =0.05; 
			//  possibly could do 

			var defaultForm={
				price: "",
				tax: "",
				tip:""
			}

			$scope.user = angular.copy(defaultForm);

			$scope.subtotal=function(a,b) {
				var a = $scope.mealPrice;
				var b = $scope.mealTax;
				// var a = mealPrice;
				// var b = mealTax;
				return a + (a *b);
			}

			$scope.tip= function(a,b) {
				var a = $scope.subtotal();
				var b = $scope.tipPercent;
				// var a = $scope.subtotal();
				// var b = tipPercent;
				return a * b;
			}

			$scope.total = function(a,b) {
				var a = $scope.tip();
				var b = $scope.subtotal();
				// var a = $scope.tip();
				// var b = $scope.subtotal();
				return a + b;
			}

			$scope.submit = function() {
				console.log($scope.myForm);
				$scope.ready = $scope.myForm.$valid;
				// $scope.myForm = angular.copy(myForm);
			}

			// ***********cannot figure out why this will not work!!!!!!!

			$scope.cancel = function() {
				$scope.myForm.$setPristine();
				// $scope.user = angular.copy(defaultForm);
				$scope.mealPrice ="";
				$scope.mealTax = 0.05;
				$scope.tipPercent = 0.05;
				console.log('empty');
			}


			// works!!!!!!!!!!!!!!!
			// $scope.cancel = function() {
			// 	$scope.mealPrice ="" ;
			// 	$scope.mealTax = 0.05;
			// 	$scope.tipPercent =0.05; 
			// }
			


		

	});		
