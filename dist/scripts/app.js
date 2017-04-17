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
        });
//        
//        $stateProvider
//            .state('create', {
//                url: '/create',
//                controller: 'RoomCtrl',
//                controllerAs: 'create',
//                templateUrl: '/templates/create.html'
//        });
    }
    
    angular
        .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase'])
        .config(config);
})();