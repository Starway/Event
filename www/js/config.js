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
  
  .state('app.summary', {
      url: '/summary',
      views: {
        'menuContent': {
          templateUrl: 'templates/summary.html',
            controller: 'SummaryCtrl'
        }
      }
    })
  
  .state('app.preview', {
      url: '/preview',
      views: {
        'menuContent': {
          templateUrl: 'templates/preview.html',
            controller: 'PreviewCtrl'
        }
      }
    })

  .state('app.success', {
      url: '/success',
      views: {
        'menuContent': {
          templateUrl: 'templates/success.html',
            controller: 'SuccessCtrl'
        }
      }
    })
  
  .state('app.inventory', {
      url: '/inventory',
      views: {
        'menuContent': {
          templateUrl: 'templates/inventory.html',
            controller: 'InventoryCtrl'
        }
      }
    })
  
  .state('app.itemDetails', {
      url: '/itemDetails',
      views: {
        'menuContent': {
          templateUrl: 'templates/itemDetails.html',
            controller: 'ItemDetailsCtrl'
        }
      }
    })
  
  
    
  ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/records');
//    $urlRouterProvider.otherwise('/app/createNewEvent');
});