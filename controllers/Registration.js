SFApp.controller("Registration",function($scope,$firebaseAuth){
/**
 * Surely there's some improvements to make, comments/help always appreciated :3
 */

$scope.init = function() {
  // Generate li foreach fieldset
  for (var i = 0; i < count; i++) {
    var ul = document.querySelector('ul.items'),
        li = document.createElement("li");

    ul.appendChild(li);
  }
  // Add class active on first li
  ul.firstChild.classList.add('active');
}

$scope.next = function(target) {
  var input = target.previousElementSibling;
  
  // Check if input is empty
  if (input.value === '') {
    body.classList.add('error');
  } else {
    body.classList.remove('error');
    
    var enable = document.querySelector('form fieldset.enable'),
        nextEnable = enable.nextElementSibling;
    enable.classList.remove('enable');
    enable.classList.add('disable');
    nextEnable.classList.add('enable');
    
    // Switch active class on left list
    var active = document.querySelector('ul.items li.active'),
        nextActive = active.nextElementSibling;
    active.classList.remove('active');
    nextActive.classList.add('active');
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
