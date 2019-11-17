app.controller('MainCtrl', ['$scope','$http','eSubcenterApi','$q', function($scope,$http,eSubcenterApi,$q ) {
var url ="/"
   var apiUrl = url+"api/"; 
   var csrf_token=document.getElementById('csrf_token').value
   console.log(csrf_token)
$scope.login_details={
	"username":"",
	"password":""
}

$scope.UserLogin=function () {
	console.log($scope.login_details,"********")
        var config = {headers: {
        "X-CSRFToken": csrf_token}
            };

     $http.post(apiUrl+'auth/',$scope.login_details,config).then(function (response) {
                    console.log(response.data)
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
                    alert("enter valid details")
                    return $q.reject(response.data);
                });
    }





}]);
