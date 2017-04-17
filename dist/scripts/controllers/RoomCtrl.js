(function(){

    function RoomCtrl(Room, $uiModal, $scope, $firebase, $document){
        
        var room = this;
                
        activate();
        
        function activate() {
            console.log("Activating RoomCtrl");
            console.log(room.rooms);
        }
    }
        
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', '$firebase', RoomCtrl]);
})();