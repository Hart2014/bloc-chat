(function(){

    function LandingCtrl(Room, $uibModal){
        
        var landing = this;
        landing.rooms = Room.all;
        
        activate();
        
        function activate() {
            console.log("Activating LandingCtrl");
            console.log(landing.rooms);
            //console.log(Room.createRoom("Investors"));
        }
        
        landing.open = function(){
            $uibModal.open({
                templateUrl: '/templates/create.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
    }
        
    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', '$uibModal', LandingCtrl]);
        // $modalInstance switched from $uibModal as per http://stackoverflow.com/questions/37166102/angular-injectorunpr-with-uibmodal
        //remember to ask Ryan about how to avoid redundancy on the above line
})();