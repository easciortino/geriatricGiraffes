angular.module('hackoverflow.add-post', [
  'hackoverflow.services',
  'ui.router'
])

.config(function ($stateProvider) {
})

.controller('AddPostController', function ($scope, $rootScope, $state,
  $stateParams, Posts, ForumService) {
  $scope.title = '';
  $scope.body = '';
  $scope.forums = [];
  $scope.forum = ForumService.currentForum.model.forum;

  $scope.getForums = function getForums() {
    Posts.getForums().then(function (data) {
      $scope.forums = data.data.sort();
      $scope.forums.unshift('Please choose a forum');
    });
  };

  $scope.submit = function (title, body, forum) {
    Posts.createPost(title, body, forum,
      $rootScope.user, new Date());
      // $state.transitionTo('tab.posts', { 'forum': $scope.forum }, { notify: true });
      $scope.$emit('addedNewPost');
      $state.go('tab.posts', { 'forum': $scope.forum },{reload: true});
  };

  $scope.getForums();
});
