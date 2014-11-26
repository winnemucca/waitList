var app = angular.module('myApp',[]).
		controller('costController', function($scope) {
			$scope.mealPrice =("") ;
			$scope.mealTax = 0.05;
			$scope.tipPercent =0.15; 

			$scope.subtotal=function(a,b) {
				var a = $scope.mealPrice;
				var b = $scope.mealTax;
				return a + (a *b);
			}

			$scope.tip= function(a,b) {
				var a = $scope.subtotal();
				var b = $scope.tipPercent;
				return a * b;
			}

			$scope.total = function(a,b) {
				var a = $scope.tip();
				var b = $scope.subtotal();
				return a + b;
			}

			


		

	});		
