var app = angular.module('myApp',[]).
		controller('costController', function($scope) {
			// $scope.mealPrice ="" ;
			// $scope.mealTax = 0.05;
			// $scope.tipPercent =0.05; 
			//  possibly could do 


			var defaultForm={
				mealPrice: "",
				mealTax: "",
				tipPercent:""
			}
			// variables for my earnings Info;
			$scope.mealCount = 0;
			$scope.tipTotal = 0;
			$scope.averageTip = 0;

			$scope.user = angular.copy(defaultForm);



			$scope.subtotal=function() {
				var a = $scope.user.mealPrice;
				var b = $scope.user.mealTax;
				// var a = mealPrice;
				// var b = mealTax;
				console.log(a,b);
				return a + (a *b);
			}

			$scope.tip= function() {
				var a = $scope.subtotal();
				var b = $scope.user.tipPercent;
				// var a = $scope.subtotal();
				// var b = tipPercent;
				return a * b;
			}

			$scope.total = function() {
				var a = $scope.tip();
				var b = $scope.subtotal();
				// var a = $scope.tip();
				// var b = $scope.subtotal();
				return a + b;
			}

			$scope.submit = function() {
				console.log("hello");
				$scope.calculateEarnings();
				$scope.user.mealPrice= null;
				$scope.user.mealTax=null;
				$scope.user.tipPercent =null;


				// $scope.myForm = angular.copy(myForm);
			}


			

			$scope.cancel = function() {
				$scope.user.mealPrice= null;
				$scope.user.mealTax=null;
				$scope.user.tipPercent =null;
			}

			$scope.calculateEarnings = function(){
				$scope.mealCount +=1;
				$scope.tipTotal +=$scope.tip();
				$scope.averageTip = $scope.tipTotal/$scope.mealCount;
			}

			$scope.reset= function() {
				$scope.myForm.$setPristine();
				$scope.user = angular.copy(defaultForm);
				$scope.mealCount = 0;
				$scope.tipTotal=0;
				$scope.averageTip =0;

			}


			
			


		

	});		
