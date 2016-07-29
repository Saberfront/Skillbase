SFApp.controller("HomeController",function($scope,$sce){


if (window.DeviceMotionEvent) {
$scope.platform = "Mobile";
} else {
   $scope.gameLink = "";
  $scope.platform = 'for PC';
}
});
