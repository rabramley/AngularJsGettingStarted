(function(){
  var module = angular.module("githubViewer");
  
  var RepoController = function($scope, $routeParams, github){

    var onRepo = function(data){
      console.log('Yello');
      $scope.repo = data;
    };
    
    var onError = function(reason){
    console.log('Brown');
      $scope.error = reason;
    }

    var reponame = $routeParams.reponame;
    var username = $routeParams.username;
    
    console.log('Blue');
    github.getRepoDetails(username, reponame)
      .then(onRepo, onError);
  };
  
  module.controller("RepoController", RepoController);
}());