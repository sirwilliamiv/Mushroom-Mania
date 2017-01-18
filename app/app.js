

const app = angular.module('mushroomTime', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
  .when('/', {
    controller: 'MainCtrl',
    templateUrl: 'partials/main.html'
  })

})


app.controller('MainCtrl', function($scope,$http) {
  $scope.mush = "lots of mushrooms"

   $http.get(`mushrooms.json`)
       .then((mush) => {
        console.log(mush)
          $scope.data = mush.data.mushrooms

       })
    $scope.poison = ()=> {

    }
})
