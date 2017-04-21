angular.module('testingAngularApp').service('angularService1',function($http){
  this.getData=function()
  {
    //console.log("inside get data");
    //     return  $http.post('http://api.openweathermap.org/data/2.5/forecast',{
    //           q:'London,us',
    //           units: 'metric',
    //         mode:'json',
    //         appid: "f0a6a262ad71b70e55df6f24d6be9ccc"
    // })
    var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';

    var request = {
      method: 'GET',
      url: URL,
      params: {
        q: 'Mumbai',
        mode: 'json',
        units: 'imperial',
        appid: 'f0a6a262ad71b70e55df6f24d6be9ccc'
      }
    };

    return $http(request)
  }

})
