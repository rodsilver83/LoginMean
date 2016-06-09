/**
 * Created by Rodrigo on 6/9/16.
 */
angular.module('LoginModule',[])
  .controller('LoginCtrl',function ($scope, $http, $location) {
    $scope.user = {'username':'','password':''};
    $scope.errorlogin = false;


    $scope.doLogin = function(){
      $http.post('http://localhost:3000/login',$scope.user)
        .then(function(response){
          if(response.data == 'OK'){
            $location.path('/main');
          }else{
            $scope.errorlogin = true;
          }
        });
    };
  });