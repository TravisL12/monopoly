var app = angular.module('angularApp', []);

app.controller('nameController', function($scope) {
  $scope.name = 'Travis';
});

app.controller('imageController', function($scope) {
  $scope.images = ['Travis', 'Schuyler', 'Matthew'];
});
