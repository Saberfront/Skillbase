SFApp.controller("Registration",function($scope,$firebaseAuth){
/**
 * Surely there's some improvements to make, comments/help always appreciated :3
 */

$scope.init = function() {
  // Generate li foreach fieldset
  for (var i = 0; i < count; i++) {
    var ul = $('ul.items'),
        li = $("<li></li>");
 li.appendTo(ul);

  }
  // Add class active on first li
  ul.children()[0].addClass('active');
}

$scope.next = function(target) {
  var input = target.prev();
  
  // Check if input is empty
  if (input.value === '') {
    body.classList.add('error');
  } else {
    body.classList.remove('error');
    
    var enable = $('form fieldset.enable'),
        nextEnable = enable.next();
    enable.removeClass('enable');
    enable.addClass('disable');
    nextEnable.addClass('enable');
    
    // Switch active class on left list
    var active = $('ul.items li.active'),
        nextActive = active.next();
    active.removeClass('active');
    nextActive.addClass('active');
  }
}

 $scope.keyDown = function(event) {
  var key = event.keyCode,
      target = document.querySelector('fieldset.enable .button');
  if (key == 13 || key == 9) $scope.next(target);
}

var body = document.querySelector('body'),
    form = document.querySelector('form'),
    count = form.querySelectorAll('fieldset').length;

window.onload = $scope.init;
document.body.onmouseup = function (event) {
    var target = event.target || event.toElement;
    if (target.classList.contains("button")) $scope.next(target);
};
document.addEventListener("keydown", $scope.keyDown, false);

});
