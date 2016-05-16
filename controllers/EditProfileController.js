SFApp.controller("EditProfileController",function($scope,Players,$firebaseObject,AuthService){
			var ref = new Firebase("saberfront-skillbase.firebaseio.com");

     	var auth = AuthService;
     	$scope.auth =  auth;
         $scope.isLoggedIn = false;
  $scope.login = function(){
  	auth.$authWithPassword({
  		email: $scope.email,
  		password:$scope.pass
  	}).then(function(userData){
  	
  	});
  };
 auth.$onAuth(function(authData){
 		$scope.isLoggedIn = true;
 	$scope.AuthData = authData;
 		var obj =  Players.$getRecord(authData.uid);
	$scope.dat = obj;
	$scope.changeUserName = function(){
	  $scope.dat.name = $scope.name;
	  	Players[Players.$indexFor(authData.uid)] = $scope.dat;
  	Players.$save(Players.$indexFor(authData.uid)).then(function(ref){
  		ref.key() === authData.uid;
  	});
	};
});
});
