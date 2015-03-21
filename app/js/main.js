var app = angular.module("ProductApp", []);

app.controller('ProductListCtrl', [ '$scope', '$http', function($scope) {

    $scope.sorting = {
        by: 'price',
        desc: true
    };

    function fetchItunes() {
        $http.get('https://xplatform.org/static/resources/itunes.json').success(function(data){
            $scope.products = data;
        });

        $timeout(fetchItunes, 5000);
    }

    fetchItunes();

    $scope.sortBy = function(byWhat) {
        $scope.sorting.by = byWhat;
        $scope.sorting.desc = !$scope.sorting.desc;
    };

    $scope.addNewOrder = function(newOrder) {
        $scope.products.push(newOrder);
    };

    $scope.newOrder = {
        name: 'Dave Meetings',
        street: 'Long Street 21',
        postcode: 0,
        city: 'Helsinki'
    };

}]);