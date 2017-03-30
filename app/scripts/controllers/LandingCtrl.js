(function(){

    function LandingCtrl(Room, $scope, $firebase){
        
        var vm = this;
        vm.rooms = Room.all;
      //  $scope.rooms = Room.all;
        
        activate();
        
        function activate() {
            console.log("Activating LandingCtrl");
//            console.log($scope.rooms);
        }
    }
        
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', '$firebase', LandingCtrl]);
        //remember to ask Ryan about how to avoid redundancy on the above line
})();
