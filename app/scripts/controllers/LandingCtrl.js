(function(){

    function LandingCtrl(Room, Message, $uibModal, $cookies){
        
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
          
        // set current room and recalls messages within room per matching $id
        landing.setCurrentRoom = function(room){
            landing.currentRoom = room;
            landing.messages = Message.getId(landing.currentRoom.$id);
        }
        
        // send message with currentRoom.$id property
        landing.sendMessage = function(){
            landing.newMessage.roomId = landing.currentRoom.$id;
            Message.send(landing.newMessage);
        }
    }
        
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', 'Message', '$uibModal','$cookies', LandingCtrl]);
        // $modalInstance switched from $uibModal as per http://stackoverflow.com/questions/37166102/angular-injectorunpr-with-uibmodal
        //remember to ask Ryan about how to avoid redundancy on the above line
})();