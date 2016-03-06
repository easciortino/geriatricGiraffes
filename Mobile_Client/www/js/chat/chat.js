angular.module('hackoverflow.chat', [
    'hackoverflow.services',
    'ui.router'
  ])

.controller('ChatController', function($scope, socket, $state) {
  $scope.msgs = [];
  $scope.sendMsg = function(msg) {
    // sends message to server
    socket.emit('send msg', msg);
  };
  // client receives message from server
  socket.on('get msg', function(msg) {
    $scope.msgs.push(msg);
  });
});
