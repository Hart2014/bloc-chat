(function(){

    function RoomCtrl(Room, $scope, $firebase){
        
        var vm = this;
        vm.rooms = Room.all;
        
        activate();
        
        function activate() {
            console.log("Activating RoomCtrl");
            console.log(vm.rooms);
        }
    }
        
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$firebase', LandingCtrl]);
})();