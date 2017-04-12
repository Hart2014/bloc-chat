(function() {
  function Room($firebaseArray) {
    var Room = {};

    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
            
    Room.all = rooms;
      
    Room.createRoom = function(name) {
        var now = new Date();
        rooms.$add({
            name: name,
            createdAt: now.getTime(),
        });
    };

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();