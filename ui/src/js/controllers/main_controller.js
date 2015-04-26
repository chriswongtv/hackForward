angular.module('HackForward.controllers.Main', [])

.controller('MainController', function($scope){

        $scope.pitches = [
            {name:'BeeOnDemand',desc:'Need a worker? Find a worker(bee) instantly, anywhere.',imgUrl:'Norway'},
            {name:'FishHog',desc:'Race to the target',imgUrl:'Norway'},
            {name:'Hack Forward',desc:'Improving Hackathons for people who want to start something Mo...',imgUrl:'Norway'},
            {name:'Conmigo',desc:'Find people to run or bike with',imgUrl:'Norway'},
            {name:'Instant Poker',desc:'Multiplayer mobile poker game. Go all-in or fold.',imgUrl:'Norway'},
        ];

        $scope.hackathones = [
            {name:'AngelHack SF'},
            {name:'Blabla NY'},
            {name:'Foo LA'},
        ];
  
});