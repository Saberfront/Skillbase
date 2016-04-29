   SFApp.controller("SkillsController",function($scope,$routeParams){
            $scope.SkillClasses = [
                {
                    name: "Ataru",
                    description: "A form of lightsaber combat that can also utilize force attacks",
                    combo: ["Force","Lightsaber"]
                },
                {
                    name: "Force",
                    
                }
                ];
                $scope.currentMove = $scope.SkillClasses[$routeParams.id];
        });
