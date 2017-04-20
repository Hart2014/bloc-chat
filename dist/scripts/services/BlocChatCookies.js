(function() {
  function BlocChatCookies($cookies, $uibModal) {
    activate();

      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
    var currentUser = $cookies.get('blocChatUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
            templateUrl: '/templates/login.html',
            size: 'sm',
            controller: 'ModalCtrl as modal'
        });
    }
      
    function activate(){
        return "blocChatCookies running!";
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();