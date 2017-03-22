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
                ctonrollerAs: 'landing',
                templateUrl: '/templates/landing.html'
        });
    }
    
    angular
        .module('blocChat', ['ui.router', 'firebase'])
        .config(config);
})();