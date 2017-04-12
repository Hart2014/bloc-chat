(function(){
    
    function config($stateProvider, $locationProvider){
        
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
        });
        
        $stateProvider
            .state('landing', {
                url: '/',
                controller: 'LandingCtrl',
                controllerAs: 'landing',
                templateUrl: '/templates/landing.html'
        })
        
        $stateProvider
            .state('createRoom', {
                url: '/createRoom',
                controller: 'RoomCtrl',
                controllerAs: 'create',
                templateUrl: '/templates/createRoom.html'
        });
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();