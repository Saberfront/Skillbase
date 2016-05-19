SFApp.controller('BlogController', function($scope,BlogService,$firebaseArray,$http){
    
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
$scope.blog.addPost = function(){
      $scope.blog.post.createdOn = Date.now();
       $scope.blog.post.comments = [""];
       $scope.blog.post.likes = 0;
       
       BlogService.$add($scope.blog.post).then(function(ref){
       });
       $scope.blog.posts.unshift(this.post);
       $scope.blog.tab = 0;
       
       
    };   
    
  });
  
  SFApp.controller('CommentController', function(BlogService){
    this.comment = {};
    this.addComment = function(post){
     var befpost = post;
      this.comment.createdOn = Date.now();
      post.comments.unshift(this.comment);
          BlogService[BlogService.$indexFor(BlogService.$keyAt(befpost))] = post;
      BlogService.$save(BlogService.$indexFor(BlogService.$keyAt(post))).then(function(ref){
       
      });
    
      this.comment ={};
    };
    });
