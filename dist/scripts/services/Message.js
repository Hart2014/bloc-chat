(function() {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
            
    Message.all = messages;
      
    Message.create_room = function(name) {
        var now = new Date();
        messages.$add({
            name: name,
            createdAt: now.getTime
        });
    };
      
    Message.get_messages_for_room = function(roomId) {
        // Get the message for the given room and return them.
    };

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();