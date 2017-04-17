(function() {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
            
    Message.all = messages;
      
    Message.createRoom = function(name) {
        var now = new Date();
        messages.$add({
            name: name,
            createdAt: now.getTime
        });
    };
      
    Message.getMessages = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomID').equalTo(roomId));
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();