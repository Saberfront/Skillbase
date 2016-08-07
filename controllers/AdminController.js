SFApp.controller('AdminController',function($scope,$http,auth){
  $scope.auth = auth;
  $('#menu-action').click(function() {
  $('.sidebar').toggleClass('active');
  $('.main').toggleClass('active');
$http.get("https://www.roblox.com/mobileapi/userinfo",).success(data){
   $('.main').html(data)
  
  $(this).toggleClass('active');

  if ($('.sidebar').hasClass('active')) {
    $(this).find('i').addClass('fa-close');
    $(this).find('i').removeClass('fa-bars');
  } else {
    $(this).find('i').addClass('fa-bars');
    $(this).find('i').removeClass('fa-close');
  }
});

// Add hover feedback on menu
$('#menu-action').hover(function() {
    $('.sidebar').toggleClass('hovered');
});
});
