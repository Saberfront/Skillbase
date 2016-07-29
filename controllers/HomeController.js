SFApp.Controller("HomeController",function($scope){


if (window.DeviceMotionEvent) {
   $scope.gameLink = "";
} else {
   $scope.gameLink = "";
}
});
