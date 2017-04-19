(function() {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
            
    Message.all = messages;
      
    Message.send = function(newMessage) {
        messages.$add(newMessage);
        newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
    }

      
    Message.getId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();