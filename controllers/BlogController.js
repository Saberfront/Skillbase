SFApp.controller('BlogController', function($rootScope,$scope,Players,AuthService,BlogService,$firebaseArray,$http){
     	var ref = new Firebase("saberfront-skillbase.firebaseio.com");



    $scope.tinymceOptions = {
    theme: 'modern',
  plugins: [
    'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks visualchars code fullscreen',
    'insertdatetime media nonbreaking save table contextmenu directionality',
    'emoticons template paste textcolor colorpicker textpattern imagetools'
  ],
  toolbar1: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
  toolbar2: 'print preview media | forecolor backcolor emoticons',
  image_advtab: true,
  templates: [
    { title: 'Test template 1', content: 'Test 1' },
    { title: 'Test template 2', content: 'Test 2' }
  ],
  content_css: [
    '//fast.fonts.net/cssapi/e6dc9b99-64fe-4292-ad98-6974f93cd2a2.css',
    '//www.tinymce.com/css/codepen.min.css'
  ]
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
     $scope.isLoggedIn = $rootScope.isLoggedIn;
     auth.$onAuth(function(authData){
      $scope.BlogService = BlogService;
      var obj =  Players.$getRecord(authData.uid);
     
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
