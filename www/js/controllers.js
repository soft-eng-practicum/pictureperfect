angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Distance', id: 0},
    { title: 'Angle', id: 1},
  ];
})

.controller('DefinitionCtrl',function($scope){
  $scope.definitionSet = [
    { description: 'Description'},
    { image: 'Placeholder text'},
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.playlistSet = [
   [
     { title: 'Longshot', Description: 'This is a Longshot'},
     { title: 'Medium Shot', Description: 'This is a Medium Shot'},
     { title: 'Closeup', Description: 'This is a Closeup'},
     { title: 'Extreme Closeup', description: 'This is an extreme closeup'}
   ],
   [
     { title: 'Head On', description: 'Whoever'},
     { title: 'High Angle', description: 'Whatever'},
     { title: 'Low Angle', description: 'Whenever'},
     { title: 'Overhead', description: 'Whomever'}
   ],

 ];
 $scope.id = $stateParams.playlistId;
});
