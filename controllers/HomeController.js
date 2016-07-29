SFApp.Controller("HomeController",function($scope){


if (window.DeviceMotionEvent) {
   $scope.gameLink = "robloxmobile://placeID=330893648";
} else {
   $scope.gameLink = "";
}
});
