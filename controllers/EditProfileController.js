SFApp.controller(function($scope,Players,AuthService){
     	var auth = AuthService;

  
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
