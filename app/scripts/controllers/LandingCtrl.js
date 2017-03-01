(function(){
    function LandingCtrl(){
        var chatRooms = ['placeholder'];
        this.chatRoom = chatRooms;
    }
    
    angular
        .module('blocChat')
        .controller('LandingCtrl', LandingCtrl);
})();