SFApp.controller("HomeController",function($rootScope,$scope,$sce){
$scope.isLoggedIn = $rootScope.isLoggedIn;

function detectmob() { 
 if( window.navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || window.navigator.userAgent.match(/iPhone/i)
 || window.navigator.userAgent.match(/iPad/i)
 ||  window.navigator.userAgent.match(/iPod/i)
 || window.navigator.userAgent.match(/BlackBerry/i)
 ||  window.navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}
$scope.mobile = detectmob();
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('sw.js')
           .then(function() { if($scope.mobile){alert("Service Worker Registered"); }else{console.log("Service Worker Registered");} });
}
console.log($scope.mobile)
});
