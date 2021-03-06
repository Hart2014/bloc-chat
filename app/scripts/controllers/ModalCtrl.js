(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        
        var modal = this;
        
        modal.cancel = function () {
            $uibModalInstance.dismiss();
        };
        
        modal.createRoom = function () {
            Room.add(modal.newRoom);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance','$cookies', ModalCtrl]);
})();