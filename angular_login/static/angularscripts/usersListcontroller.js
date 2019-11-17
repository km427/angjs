app.controller('UserList', ['$scope','$http','eSubcenterApi','$q', function($scope,$http,eSubcenterApi,$q ) {
var url ="/"
   var apiUrl = url+"api/"; 
$scope.userList=function () {

$http.get(apiUrl+'users').then(function (response) {
                    if (typeof response.data === 'object') {
                        $scope.users = response.data
                        return response.data;

                    } else {
                        // invalid response
                        return $q.reject(response.data);
                    }
                    // return response
                }, function (response) {
                    // something went wrong
                    return $q.reject(response.data);
                });

},
$scope.userList()
}]);
