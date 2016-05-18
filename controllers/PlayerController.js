SFApp.controller("PlayerController",function($scope,AuthService,Players,$firebaseArray,$routeParams){
	if ($.mobile){
		$.mobile.linkBindingEnabled = false;
$.mobile.hashListeningEnabled = false;
	}
		var ref = new Firebase("saberfront-skillbase.firebaseio.com");
		var auth = AuthService;
		     	$scope.auth =  auth;

	$scope.login = function(){
		auth.$authWithPassword({
		 email: $scope.em,
		 password: $scope.pass
		}).then(function(userData){
                console.log(userData.uid);
                 if(Players.$getRecord(userData.uid)){
                 		$scope.dat = Players.$getRecord(userData.uid);
                 } else {
                	$scope.dat = {	name: "Test",
                		about: "Lorum Ipsum Dolor",
                		wins: 0
                	};
                 }
                	$scope.user = Players.$getRecord(userData.uid);
                	if(!$scope.user){
                	$scope.userObj = new $firebaseObject($scope.user);
                	
                	$scope.userObj.$value = $scope.dat;
                
                	Players.$add($scope.userObj).then(function(ref) {
  var id = ref.key();
  console.log("added record with id " + id);
  Players.$indexFor(id); // returns location in the array
  	$scope.userObj.$save().then(function(ref) {
  ref.key() === $scope.userObj.$id;
                	});
});
}else{
$scope.userObj =	Players.$getRecord(userData.uid);
}

                
             $scope.Players = [
             	{
             		gameStats: [
  {
    value: 300,
    color:"#F7464A",
    highlight: "#FF5A5E",
    label: "5 v 5 Normal"
  },
  {
    value: 50,
    color: "#46BFBD",
    highlight: "#5AD3D1",
    label: "3 v 3 Normal"
  },
  {
    value: 100,
    color: "#FDB45C",
    highlight: "#FFC870",
    label: "3 v 3 Ranked"
  },
  {
    value: 40,
    color: "#949FB1",
    highlight: "#A8B3C5",
    label: "5 v 5 Ranked"
  },
  {
    value: 120,
    color: "#4D5360",
    highlight: "#616774",
    label: "Dominion"
  }
]
}
                ];
            
$scope.ctx = window.document.getElementById("gameStats").getContext("2d");
$scope.ctx.canvas.width = 180;
$scope.ctx.canvas.height = 180;
 $scope.myDoughnut = new Chart($scope.ctx).Doughnut($scope.Players[0].gameStats, {});

 $scope.champData = {
    labels: ["Fizz", "Garen", "Ashe", "Lee Sin"],
    datasets: [
        {
            label: "Data",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81]
        },
        {
            label: "Data 2",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19]
        }
    ]
};
$scope.ctx = document.getElementById("champData").getContext("2d");
$scope.myBarChart = new Chart($scope.ctx).Bar($scope.champData, {responsive: true});

 $scope.roleStats = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "AP Mid"
    },
    {
        value: 225,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Jungle"
    },
    {
        value: 240,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "AD Top"
    },
    {
        value: 260,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "AD Mid"
    },
    {
        value: 220,
        color: "#4D5360",
        highlight: "#616774",
        label: "Support"
    }
];
 $scope.ctx = document.getElementById("roleStats").getContext("2d");
$scope.ctx.canvas.width = 180;
$scope.ctx.canvas.height = 180;
$scope.myPolarArea = new Chart($scope.ctx).PolarArea($scope.roleStats, {responsive: false});

$scope.timeData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
        {
            label: "This Year",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56]
        },
        {
            label: "Last Year",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86]
        }
    ]
};
 $scope.ctx = document.getElementById("timeData").getContext("2d");
 $scope.myLineChart = new Chart($scope.ctx).Line($scope.timeData, {responsive: true});

});
};

});
