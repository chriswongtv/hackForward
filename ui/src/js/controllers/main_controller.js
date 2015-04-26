angular.module('HackForward.controllers.Main', [])

.controller('MainController', function($scope, $http){

        $scope.pitches = [
            {name:'RoboCoding',cat:'Hardware',desc:'A online lab where everyone can learn to program while programming the robots in the laboratory. ',goal:'Long-term',vote:'13'},
            {name:'6Facts',cat:'Education',desc:'Crowdsource physical world challenges',goal:'Just for fun',vote:'11'},
            {name:'HackForward',cat:'Innovation',desc:'Improving Hackathons for people who want to start something Monday',goal:'Win prizes',vote:'10'},
            {name:'CINCH',cat:'Social',desc:'Safe, Easy and Free Real Estate Transactions',goal:'Long-term',vote:'8'},
            {name:'MYNZ',cat:'Game',desc:'Augmented-Reality Apple Watch Game',goal:'Just for fun',vote:'7'},
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
