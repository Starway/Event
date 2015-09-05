angular.module('route', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.records', {
    url: '/records',
    views: {
      'menuContent': {
        templateUrl: 'templates/records.html'
      }
    }
  })

  .state('app.createNewEvent', {
      url: '/createNewEvent',
      views: {
        'menuContent': {
          templateUrl: 'templates/createNewEvent.html',
          controller: 'CreateEventCtrl'
        }
      }
    })
  
  .state('app.cost', {
      url: '/cost',
      views: {
        'menuContent': {
          templateUrl: 'templates/cost.html',
            controller: 'CostCtrl'
        }
      }
    })
  
  .state('app.costDetails', {
      url: '/costDetails',
      views: {
        'menuContent': {
          templateUrl: 'templates/costDetails.html',
            controller: 'CostDetailsCtrl'
        }
      }
    })
  
  .state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'templates/categories.html',
            controller: 'CategoriesCtrl'
        }
      }
    })
    
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/createNewEvent');
});