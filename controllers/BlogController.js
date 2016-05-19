SFApp.controller('BlogController', function($scope,BlogService,Players,AuthService,$firebaseArray,$http){
    var ref = new Firebase("saberfront-skillbase.firebaseio.com");

		var auth = AuthService;
	
    $scope.blog = {};
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
      
 auth.$onAuth(function(authData){
 		var obj =  Players.$getRecord(authData.uid);
$scope.blog.addPost = function(){
      $scope.blog.post.createdOn = Date.now();
       $scope.blog.post.comments = [""];
       $scope.blog.post.likes = 0;
       $scope.blog.author = obj.name;
       BlogService.$add($scope.blog.post).then(function(ref){
       });
       $scope.blog.posts.unshift(this.post);
       $scope.blog.tab = 0;
       
       
    };   
 });
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
  
  SFApp.controller('CommentController', function($scope,AuthService,Players,BlogService){
    this.comment = {};
    this.addComment = function(post){
     var befpost = post;
      this.comment.createdOn = Date.now();
      post.comments.unshift(this.comment);
          BlogService[BlogService.$indexFor(BlogService.$keyAt(befpost))] = post;
      BlogService.$save(BlogService.$inder(BlogService.$keyAt(post))).then(function(ref){
       
      });
    
      this.comment ={};
      
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
