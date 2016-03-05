angular.module('hackoverflow.chat', [
  'hackoverflow.services',
  'ui.router'
])
.config(function ($stateProvider) {
})

.controller('ChatController', function ($scope, socket, $state){
  $scope.msgs = ['chat', 'is', 'not'];
  $scope.sendMsg = function(){
    socket.emit('send msg', $scope.msg.text);
    // console.log($scope.msg.text)
  }
  socket.on('get msg', function(msg){
    $scope.msgs.push(msg);
    console.log("DATA", msg)
    // $scope.$digest();
  })
})