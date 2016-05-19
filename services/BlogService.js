SFApp.factory("BlogService",function($firebaseArray){
  var ref = new Firebase("https://saberfront-skillbase.firebaseio.com");
  return $firebaseArray(ref.child("Blog"));
  

});
