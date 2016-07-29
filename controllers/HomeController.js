SFApp.controller("HomeController",function($scope,$sce){


if (window.DeviceMotionEvent) {
    $sce.trustAsResourceUrl("robloxmobile://placeID=330893648");
   $scope.gameLink = "robloxmobile://placeID=330893648";
$scope.platform = "Mobile";
} else {
   $scope.gameLink = "";
  $scope.platform = 'for PC';
}
});
