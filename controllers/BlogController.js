 SFApp.controller('BlogController', function($scope,$http){
    
    $scope.blog = {};
    $scope.blog.title = "AngularJS Blog App";
    
    $scope.blog.posts = {};
    $http.get('https://s3-us-west-2.amazonaws.com/s.cdpn.io/110131/posts_1.json').success(function(data){
      $scope.blog.posts = data;
    });
    
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
       $scope.blog.post.comments = [];
       $scope.blog.post.likes = 0;
       $scope.blog.posts.unshift(this.post);
       $scope.blog.tab = 0;
       $scope.blog.post ={};
    };   
    
  });
  
  SFApp.controller('CommentController', function(){
    this.comment = {};
    this.addComment = function(post){
      this.comment.createdOn = Date.now();
      post.comments.push(this.comment);
      this.comment ={};
    };
  });
 
