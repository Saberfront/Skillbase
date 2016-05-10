app.factory("AuthService",function($firebaseAuth) {
    	var ref = new Firebase("saberfront-skillbase.firebaseio.com");
    return $firebaseAuth(ref);
  });
