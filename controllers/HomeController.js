SFApp.Controller("HomeController",function($scope){


if (window.DeviceMotionEvent) {
   $scope.gameLink = "robloxmobile://placeID=330893648";
$scope.platform = "Mobile";
} else {
   $scope.gameLink = "";
  $scope.platform = 'for PC';
}
});
