SFApp.controller('BlogController', function($rootScope,$scope,Players,AuthService,BlogService,$firebaseArray,$http){
     	var ref = new Firebase("saberfront-skillbase.firebaseio.com");



    $scope.tinymceOptions = {
    plugins : 'advlist autolink link image lists charmap print preview',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code | image',
     skin: 'lightgray',
    theme : 'modern'
  };
		var auth = AuthService;
     $rootScope.isLoggedIn = false;
     $scope.isLoggedIn = $rootScope.isLoggedIn;
     auth.$onAuth(function(authData){
         
 		var obj =  Players.$getRecord(authData.uid);
 		if(obj){
 		    $rootScope.isLoggedIn = true;
 		    $scope.isLoggedIn = $rootScope.isLoggedIn;
 		    
 		}
    $scope.blog = {};

  $scope.getContent = function() {
    console.log('Editor content:', $scope.post.body);
  };

  
    $scope.blog.title = "Saberfront Skillbase Blog";
    
    $scope.blog.posts = {};
    
      $scope.blog.posts = BlogService;

    
    $scope.blog.tab = 'blog';
    
    $scope.blog.selectTab = function(setTab){
      $scope.blog.tab = setTab;
     console.log($scope.blog.tab)
    };
    
    $scope.blog.isSelected = function(checkTab){
      return $scope.blog.tab === checkTab;
    };
    
    $scope.blog.post = {};
$scope.blog.addPost = function(){
      $scope.blog.post.createdOn = Date.now();
       $scope.blog.post.comments = [""];
       $scope.blog.post.likes = 0;
       
       BlogService.$add($scope.blog.post).then(function(ref){
       });
       $scope.blog.posts.unshift(this.post);
       $scope.blog.tab = 0;
       
       
    };   
     $scope.login = function(){
     	auth.$authWithPassword({
	email: $scope.email,
	password: $scope.pass
}).then(function(userData){
	if(userData){
		var authData = userData;
		$scope.authData = authData;
		$scope.isLoggedIn = true;
	console.log(userData);
	}
	
});
     };
  });
});
  SFApp.controller('CommentController', function($rootScope,$scope,BlogService,AuthService,Players){
  	
		var auth = AuthService;
     $scope.isLoggedIn = false;
     auth.$onAuth(function(authData){
      $scope.BlogService = BlogService;
      var obj =  Players.$getRecord(authData.uid);
      if(obj){
           $scope.isLoggedIn = $rootScope.isLoggedIn;
      }
    $scope.comment = {};
    $scope.like = function(post){
         
     var befpost = post;
     if(obj){
     	
     	if(obj.blogLikes[BlogService.$indexFor(BlogService.$keyAt(befpost))] == null){
                post.likes = post.likes+1;
                obj.blogLikes.unshift(BlogService.$indexFor(BlogService.$keyAt(befpost)));
                  BlogService[BlogService.$indexFor(BlogService.$keyAt(befpost))] = post;
 BlogService.$save(BlogService.$indexFor(BlogService.$keyAt(post))).then(function(ref){
 	Players[Players.$indexFor(authData.uid)] = obj;
       Players.$save(Players.$indexFor(authData.uid)).then(function(ref){
       
      });
      });
          
     	}
     }
                
              };
    $scope.addComment = function(post){
     var befpost = post;
      $scope.comment.createdOn = Date.now();
      post.comments.unshift($scope.comment);
          BlogService[BlogService.$indexFor(BlogService.$keyAt(befpost))] = post;
      BlogService.$save(BlogService.$indexFor(BlogService.$keyAt(post))).then(function(ref){
       
      });
    
      $scope.comment ={};
    };
    
     });

    });
