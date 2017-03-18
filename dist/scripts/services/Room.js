(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
      
    var subRooms = function(){
        var subRooms = [];
        for (var i = 0; i < rooms.length; i++){
            subRooms.push(rooms[i]);
        }
        return subRooms;
    }

    return {
      all: rooms
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();