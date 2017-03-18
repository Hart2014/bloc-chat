(function(){

    function LandingCtrl($scope, Room, $firebase){
        
        var vm = this;
        vm.room = Room.rooms;
        vm.subrooms = Room.subRooms;
        
        activate();
        
        function activate() {
            debugger;
            console.log("Activating LandingCtrl");
            console.log(vm.subrooms);
        }
    }
        
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['$scope', 'Room', '$firebase', LandingCtrl]);
        //remember to ask Ryan about how to avoid redundancy on the above line
})();
