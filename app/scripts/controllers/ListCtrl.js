(function(){
    function ListCtrl(){
        this.chatList = //define my chatList function
    }
        
    angular
        .module('blocChat')
        .controller('ListCtrl', ['ChatList', ListCtrl]);
})();