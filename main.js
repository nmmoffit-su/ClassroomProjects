let app = angular.module('istMart', []);

app.config(function($sceProvider){
	$sceProvider.enabled(false);
});

app.run(function($rootScope){
	$rootScope.key = 'np3zca43uw42ebx7d8pudsea';
});

app.controller('mainCtrl', function($scope, $http, $rootScope){
	$scope.products = [];
	$scope.cart = [];

	$http({
		url: 'http://api.walmartlabs.com/v1/search',
		method: 'jsonp',
		params: {
			'apiKey': $rootScope.key,
			'query': 'laptop',
			'sort': 'bestseller',
			'numItems': 15,
			'responseGroup': 'base'
		}
	}).then(function(response){
		$scope.products = response.data.items;

		$.each($scope.products, function(index, product){
			product.inCart = false;
		});

		console.log($scope.products)

		$scope.addToCart = function(product){
			$scope.cart.push(product);
			product.inCart = true;
		};

		$scope.subtotal = function() {
			let subtotal = 0;
			$.each($scope.cart, function(index, product){
				subtotal += product.salePrice
			});
			return subtotal;
		};
	});
});