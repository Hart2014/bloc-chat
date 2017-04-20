(function() {
    function LoginCtrl(Room, $uibModalInstance, $cookies) {
        
        var login = this;
        
        login.addUser = function () {
            $cookies.put('blocChatUser', login.username);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('LoginCtrl', ['Room', '$uibModalInstance','$cookies', LoginCtrl]);
})();