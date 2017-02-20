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



.controller('PlaylistCtrl', function($scope, $stateParams) {
  $scope.playlistSet = [
   [
     { title: 'Extreme Longshot', description: 'Subject and surroundings', id: 0},
     { title: 'Longshot', description: 'Entire subject', id: 1},
     { title: 'Medium Longshot', description: 'Subject from the knees-up', id: 2},
     { title: 'Medium Shot', description: 'Subject from the waist-up', id: 3},
     { title: 'Medium Closeup', description: 'Subject from the shoulders-up', id: 4},
     { title: 'Closeup', description: 'Subject head', id: 5},
     { title: 'Extreme Closeup', description: 'Single feature of subject head', id:6},
   ],
   [
     { title: 'Head On', description: 'Camera level with subject', id:7},
     { title: 'High Angle', description: 'Camera pointed down on subject', id:8},
     { title: 'Low Angle', description: 'Camera pointed up on subject', id:9},
     { title: 'Overhead', description: 'Camera directly above subject', id:10},
     { title: 'Canted', description: 'Camera tilted to the side', id:11},
   ],

 ];
 $scope.id = $stateParams.playlistId;
})

.controller('DefinitionCtrl',function($scope, $stateParams){
  $scope.definitionSet = [
    [{definition: 'The Extreme Longshot is taken so far away from the subject that their features are no longer visible. This is used to create a sense of a character being lost or almost engulfed by the sheer size of their surroundings. Which can result in a character being made small or insignificant due to their situation'}],
    [{definition: 'Typically shows the entire object or human figure and is usually intended to place it in some relation to its surroundings.'}],
    [{definition: 'Captures subject’s knees and upward. shows a bit more of the background but is still close enough for facial expressions to be seen.'}],
    [{definition: 'Captures subject’s waist and upward. In principal, the medium shot is what can be seen with the human eye in a single quick glance and convey all the action taking place in that field of view.'}],
    [{definition: 'Halfway between a mid shot and a close-up. Usually covers the subject’s head and shoulders.'}],
    [{definition: 'Close-ups display the most detail, but they do not include the broader scene.'}],
    [{definition: 'The shot is so tight that only a detail of the subject, such as someone’s eyes, can be seen.'}],
    [{definition: 'Eye level, perpendicular to subject'}],
    [{definition: 'Camera above subject, angled downward toward the subject'}],
    [{definition: 'Camera below subject, angled upward toward the subject'}],
    [{definition: 'Camera directly above subject, facing directly downward'}],
    [{definition: 'Camera horizontally tilted in either direction'}],
  ];
  $scope.id = $stateParams.definitionId;
});
