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
    }
    
    angular
        .module('blocChat', ['ui.bootstrap', 'ui.router', 'firebase', 'ngCookies'])
        .config(config);
})();