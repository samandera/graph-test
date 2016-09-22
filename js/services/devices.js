angular.module('app')
  .service('DevicesService', function ($http, $q) {
    this.getData = function(){
      var dataFromServer = {
        "Desktop": {
          "percentage" : 40,
          "quantity" : 6735471,
          "systems" : {
            "Windows" : {
              "percentage" : 40,
              "quantity" : 122469
            },
            "Apple" : {
              "percentage" : 25,
              "quantity" : 12336
            },
            "Linux" : {
              "percentage" : 35,
              "quantity" : 534567
            }
          }
        },
        "Mobile" : {
          "percentage" : 60,
          "quantity": 76747610,
          "systems" : {
            "Windows" : {
              "percetage" : 10,
              "quantity" : 875748
            },
            "iOS" : {
              "percentage" : 40,
              "quantity" : 7896574
            },
            "Android" : {
              "percentage" : 50,
              "quantity" : 3648
            }
          }
        }
      };
      var defer = $q.defer();
      defer.resolve(dataFromServer);
      return defer.promise;
    }
  });
