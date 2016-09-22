(function() {
	var app = angular.module('app',['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'platforms.html'
			})
			.otherwise({
				redirectTo:'/'
			});
	});


	app.controller('DevicesData', ['DevicesService', '$scope', '$window', function(DevicesService, $scope, $window) {
		$scope.detailsVisible = false;
		DevicesService.getData().then(function(devices){
			var dataTable = [
				['Platform', 'Usage']
			];
			for(var platformName in devices){
				dataTable.push([platformName, devices[platformName].percentage]);
			}
			$scope.platformsData = dataTable;
			$scope.mobileData = [
				['Platform', 'Usage'],
				['Android', 75],
				['iOS', 20],
				['WindowsPhone', 5]
			];
			$scope.desktopData = [
				['Platform', 'Usage'],
				['Linux', 10],
				['Windows', 60],
				['Mac', 30]
			];
		});
		var options = {
          pieHole: 0.8,
          backgroundColor: { fill: 'transparent'},
          pieSliceText: 'none',
          pieSliceBorderColor: '#8694cb',
          legend: {
            position: 'labeled', 
			fontSize: 14,
			fontName:'Play',
            textStyle: {color: 'white'}
          }
        };
		$scope.platformOptions = angular.extend({}, options, {"colors" :  ['#1d76c8','#ef4ced']} );
		$scope.desktopOptions = angular.extend({}, options, {"colors" :  ['#8f6dff','#b01ce0','#ef4ced']} );
		$scope.mobileOptions = angular.extend({}, options, {"colors" :  ['#95b8eb','#1d76c8','#8f6dff']} );
		
		
		
		$scope.showDetails = function(){
			$scope.detailsVisible = true;
		}
		$scope.hideDetails = function(){
			$scope.detailsVisible = false;
		}
	}]);
})();
