(function() {
  function Message($firebaseArray) {
    var Message = {};

    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
            
    Message.all = messages;
    
    // send function adding newMessage in LandingCtrl with .sentAt property
    Message.send = function(newMessage) {
        messages.$add(newMessage);
        newMessage.username = landing.currentUser;
        newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
    }

    // get roomId of messages for recall in rooms  
    Message.getId = function(roomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
    }

    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();