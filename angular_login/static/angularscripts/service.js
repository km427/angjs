angular.module('app.services', [])

app.factory('eSubcenterApi', ['$http', '$q', function ($http, $q, $scope,) {
    
   var url ="/"
   var apiUrl = url+"api/"; 
  
    return {
        userLogin:function(data){
            $http.post(apiUrl+'auth/',data).then(function (response) {
                    if (typeof response.data === 'object') {

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
        usersList:function(){
                 $http.post(apiUrl+'users/').then(function (response) {
                    if (typeof response.data === 'object') {
                        window.location.href='users_list'
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

        }
}

}]);

