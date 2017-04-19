(function(){

    function LandingCtrl(Room, Message, $uibModal){
        
        var landing = this;
        landing.rooms = Room.all;
        landing.currentRoom = null;
        
        landing.open = function(){
            $uibModal.open({
                templateUrl: '/templates/create.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
                
        landing.setCurrentRoom = function(room){
            landing.currentRoom = room;
            landing.messages = Message.getId(landing.currentRoom.$id);
        }
        
        landing.sendMessage = function(){
            landing.newMessage.roomId = landing.currentRoom.$id;
            Message.send(landing.newMessage);
        }
        
        landing.currentRoomFilter = function(roomId){
            if (roomId === landing.currentRoom.roomId){
                return landing.message;
            }
        }
    }
        
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', '$uibModal', LandingCtrl]);
        // $modalInstance switched from $uibModal as per http://stackoverflow.com/questions/37166102/angular-injectorunpr-with-uibmodal
        //remember to ask Ryan about how to avoid redundancy on the above line
})();