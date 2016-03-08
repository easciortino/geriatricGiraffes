angular.module('hackoverflow.chat', [
  'hackoverflow.services',
  'ui.router'
])
.config(function ($stateProvider) {
})

.controller('ChatController', function ($scope, socket, $state){
  $scope.msgs = [];
  $scope.sendMsg = function(){
    var messageToSend = {
      user: $scope.user,
      msg: $scope.msg.text
    };
    console.log('messageToSend',messageToSend);
    socket.emit('send msg', messageToSend);
    $scope.msg.text = '';
  };
  socket.on('get msg', function(msg){
    $scope.msgs.push(msg);

    $scope.$digest();
  });
});
