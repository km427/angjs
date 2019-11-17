var app = angular.module("app", ['ngRoute' ,]);
/*app.filter('hhmmss', function () {
    return function (time) {
        var sec_num = parseInt(time, 10); // don't forget the second param
        var hours = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) { hours = "0" + hours; }
        if (minutes < 10) { minutes = "0" + minutes; }
        if (seconds < 10) { seconds = "0" + seconds; }
        var time = hours + ':' + minutes + ':' + seconds;
        return time;
    }
});*/

app.directive("limitToMax", function() {
  return {
    link: function(scope, element, attributes) {
      element.on("keydown keyup", function(e) {
    if (Number(element.val()) > Number(attributes.max) &&
          e.keyCode != 46 // delete
          &&
          e.keyCode != 8 // backspace
        ) {
          e.preventDefault();
          element.val(attributes.max);
        }
      });
    }
  };
});
app.directive('numbersOnly', function () {
     return {
         require: 'ngModel',
         link: function (scope, element, attr, ngModelCtrl) {
             function fromUser(text) {
                 if (text) {
                     var transformedInput = text.replace(/[^0-9-]/g, '');
                     if (transformedInput !== text) {
                         ngModelCtrl.$setViewValue(transformedInput);
                         ngModelCtrl.$render();
                     }
                     return transformedInput;
                 }
                 return undefined;
             }
             ngModelCtrl.$parsers.push(fromUser);
         }
     };
 })
