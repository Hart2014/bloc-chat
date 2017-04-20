(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        
        var modal = this;
        modal.newUser.name = null;
        
        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        modal.createRoom = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };
        
        modal.addUser = function () {
            $cookies.put('blocChatUser', modal.username);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance','$cookies', ModalCtrl]);
})();