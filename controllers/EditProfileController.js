SFApp.controller("EditProfileController",function($scope,Players,$firebaseObject,AuthService){
			var ref = new Firebase("saberfront-skillbase.firebaseio.com");

     	var auth = AuthService;
         $scope.isLoggedIn = false;
  $scope.login = function(){
  	auth.$authWithPassword({
  		email: $scope.email,
  		password:$scope.password
  	}).then(function(userData){
  		$scope.isLoggedIn = true;
  	});
  }
 auth.$onAuth(function(authData){
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
