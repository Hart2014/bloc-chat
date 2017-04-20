(function() {
  function BlocChatCookies($cookies, $uibModal) {  
    var currentUser = $cookies.get('blocChatUser');
    if (!currentUser || currentUser === '') {
        $uibModal.open({
            templateUrl: '/templates/login.html',
            size: 'sm',
            controller: 'LoginCtrl as login'
        });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();