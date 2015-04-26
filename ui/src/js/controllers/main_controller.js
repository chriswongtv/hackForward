angular.module('HackForward.controllers.Main', [])

.controller('MainController', function($scope, $http){

        $scope.pitches = [
            {name:'BeeOnDemand',cat:'Social',desc:'Need a worker? Find a worker(bee) instantly, anywhere.',goal:'Long-term'},
            {name:'FishHog',cat:'Fun Ideas',desc:'Race to the target',goal:'Just for fun'},
            {name:'Hack Forward',cat:'Innovation',desc:'Improving Hackathons for people who want to start something Mo...',goal:'Win prizes'},
            {name:'Conmigo',cat:'Social',desc:'Find people to run or bike with',goal:'Long-term'},
            {name:'Instant Poker',cat:'Game',desc:'Multiplayer mobile poker game. Go all-in or fold.',goal:'Experience'},
        ];


        $http.get('http://10.250.0.170:5000/api/pitches').
          success(function(data, status, headers, config) {
            $scope.pitches = data;
            // this callback will be called asynchronously
            // when the response is available
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

        $scope.hackathons = [
            {name:'AngelHack SF'},
            {name:'Blabla NY'},
            {name:'Foo LA'},
        ];

        $scope.tiles = [
            {name:'All Pitches', url:'#pitches'},
            {name:'My Pitch', url:'#addpitch'},
            {name:'Presentation', url:'#presentation'},
        ];

});
