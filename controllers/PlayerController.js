SFApp.controller("PlayerController",function($scope,$firebaseAuth,$firebaseArray,$firebaseObject,$routeParams){
		var ref = new Firebase("saberfront-skillbase.firebaseio.com");
		var auth = $firebaseAuth(ref);
		var Players = $firebaseArray(ref.child("Players"))
		auth.$authWithOAuthPopup("google").then(function(authData) {
        if(Players == null){
        
        	console.log("Players list null");
        }else{
        	$scope.dat = {
        		name: authData.google.displayName
        	};
        	if(Players.$indexFor($scope.dat) == -1){
        		        		    $scope.player = Players.$getRecord(Players.$keyAt(Players.$indexFor($scope.dat)));
if (!$scope.player){
        	Players.$add($scope.dat).then(function(ref) {
console.log("User added"); // returns location in the array
});
}else{
	$obj = $firebaseObject($scope.player);
	$obj.$bindTo($scope.player, "data").then(function() {
  console.log($scope.data); // { foo: "bar" }
  $scope.playerName = $scope.data.name;  // will be saved to the database
    // this would update the database and $scope.data
});
}
        }

        }
       
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
            $scope.Players = [
                {
                  	 gameStats : [
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
