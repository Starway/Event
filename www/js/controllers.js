angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };    
})

.controller('CreateEventCtrl', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('templates/cost.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
    
    $scope.goCost = function() {
        $scope.modal.show();
    };
})

.controller('SelectTeamsCtrl', function($scope, $ionicModal){
    $scope.teamsList = [
        { text: "Item 1", checked: false },
        { text: "Item 2", checked: false },
        { text: "Item 3", checked: false },
        { text: "Item 4", checked: false },
        { text: "Item 5", checked: false }
    ];
    
    $scope.teamsData = {};
    $scope.textTeams = "123";
    
    $ionicModal.fromTemplateUrl('templates/selectTeams.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    
    $scope.close = function(){
        $scope.modal.hide();
    };
    
    $scope.show = function(){
        $scope.modal.show();
    }
    
    $scope.done = function(){
        $scope.modal.hide();    
        console.log($scope.teamsList);
//        angular.forEach($scope.teamsList, function(checked in teamList.checked){            
//            if (checked == true) {
//                $scope.textTeams = $scope.textTeams + teamList.text;
//            }            
//        })
//        return $scope.textTeams;
    }
})

.controller('SelectProjectsCtrl', function($scope, $ionicModal){
    $scope.projectsList = [
        { text: "Project 1", checked: false },
        { text: "Project 2", checked: false },
        { text: "Project 3", checked: false },
        { text: "Project 4", checked: false },
        { text: "Project 5", checked: false },
        { text: "Project 6", checked: false },
        { text: "Project 7", checked: false },
        { text: "Project 8", checked: false }
    ];
    
    $scope.projectsData = {};
    
    $ionicModal.fromTemplateUrl('templates/selectProjects.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    
    $scope.close = function(){
        $scope.modal.hide();
    };
    
    $scope.show = function(){
        $scope.modal.show();
    }
    
    $scope.done = function(){
        $scope.modal.hide();    
        console.log($scope.projectsList);
    }
})

.controller('SelectPersonsCtrl', function($scope, $ionicModal){
    $scope.personsList = [
        { text: "Person 1", checked: false },
        { text: "Person 2", checked: false },
        { text: "Person 3", checked: false },
        { text: "Person 4", checked: false }
    ];
    
    $scope.personsData = {};
    
    $ionicModal.fromTemplateUrl('templates/selectPersonInCharge.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    
    $scope.close = function(){
        $scope.modal.hide();
    };
    
    $scope.show = function(){
        $scope.modal.show();
    }
    
    $scope.done = function(){
        $scope.modal.hide();    
        console.log($scope.personsList);
    }
})

.controller('SelectCountryCtrl', function($scope, $ionicModal, $window){
//    $scope.countryList = [
//        { text: "Malaysia", checked: false },
//        { text: "Singapore", checked: false },
//        { text: "Philipine", checked: false },
//        { text: "Indonesia", checked: false }
//    ];
    
    $scope.countryData = {};
    $scope.countryList = [
        { Id: 1, Name: "Malaysia", selected: false },
        { Id: 2, Name: "Singapore", selected: false },
        { Id: 3, Name: "Philipine", selected: false },
        { Id: 4, Name: "Indonesia", selected: false }
    ];
    
//    $scope.item = 2;
    
    $ionicModal.fromTemplateUrl('templates/selectCountry.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    
    $scope.show = function(){
        $scope.modal.show();
    };  
    
    $scope.done = function(){
        $scope.modal.hide();    
    };
    
    $scope.countryData.selectedCountry = 'Malaysia';
    $scope.updateCountry = function(country) {
        $scope.countryData.selectedCountry = country.Name;
    };
    
})


.controller('SelectStateCtrl', function($scope, $ionicModal){
    $scope.stateList = [
        { text: "Selangor", checked: false },
        { text: "Kuala Lumpur", checked: false },
        { text: "Sarawak", checked: false },
        { text: "Johor", checked: false },
        { text: "Penang", checked: false },
        { text: "Sabah", checked: false },
        { text: "Perak", checked: false },
        { text: "Pahang", checked: false },
        { text: "Negeri Sembilan", checked: false },
        { text: "Kedah", checked: false },
        { text: "Malaka", checked: false },
        { text: "Terengganu", checked: false },
        { text: "Kelantan", checked: false },
        { text: "Perlis ", checked: false },
        { text: "Labuan", checked: false }
    ];
    
    $scope.stateData = {};
    
    $ionicModal.fromTemplateUrl('templates/selectState.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
    
    $scope.close = function(){
        $scope.modal.hide();
    };
    
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();    
        console.log($scope.stateList);
    };
    
    $scope.stateData.selectedState = 'Kuala Lumpur';
    $scope.updateState = function(item){
        $scope.stateData.selectedState = item.text;
    };
})

.controller('CostCtrl', function($scope, $ionicModal){
})


.controller('CostDetailsCtrl', function($scope, $ionicModal, $ionicHistory){
    
    $scope.methodOptions = [
        {id:0, text:'Inventory'},
        {id:1, text:'Venue Application & Payment'},
        {id:2, text:'Set Up Arrangement & Logistic'},
        {id:3, text:'Accomodation & Transportation'},
    ];
    
//    apiMethodOptions.getAll().then(function(results) {
//        $scope.methodOptions = results;   
//    });
    
    $scope.abc = '123';
    
     $scope.done = function(){
         $ionicHistory.goBack();
    };
})

.controller('CategoriesCtrl', function($scope, $ionicModal){
     $scope.categoriesList = [
        {id:0, text: "Venue Application & Payment", checked: false },
        {id:1, text: "Set Up Arrangement & Logistic", checked: false },
        {id:2, text: "Accomodation & Transportation", checked: false }
    ];
    
    $scope.categoriesData = {};
    
    $ionicModal.fromTemplateUrl('templates/selectCategories.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();    
    };
    
    $scope.categoriesData.selectedCategories = 'Venue Application & Payment';
    $scope.updateCategories = function(item){
        $scope.categoriesData.selectedCategories = item.text;
    };
    
    
})


.controller('SearchVenueCtrl', function($scope, $ionicModal, $timeout, $ionicTemplateLoader,  $ionicBackdrop){
    $ionicModal.fromTemplateUrl('templates/searchVenue.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();    
    };
        
})

.controller('SummaryCtrl', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('templates/summary.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();    
    };
        
})

.controller('PreviewCtrl', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('templates/preview.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();    
    };
        
})

.controller('SuccessCtrl', function($scope, $ionicModal, $ionicHistory, $ionicSideMenuDelegate, $state){
    $ionicModal.fromTemplateUrl('templates/success.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.close = function(){
//        $scope.modal.hide();   
        $ionicHistory.goToHistoryRoot($ionicHistory.currentView().historyId);
//        $ionicSideMenuDelegate.toggleLeft();
        
//        $state.go('app.records'); 
        
//        $ionicHistory.goToHistoryRoot($ionicHistory.backView().historyId);
//        $urlRouterProvider.otherwise('/app/records');
//        $ionicHistory.goToHistoryRoot('/app/records');
//         $state.go('app', {});
    };
})


.controller('InventoryCtrl', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('templates/inventory.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();           
    };
})

.controller('ItemDetailsCtrl', function($scope, $ionicModal){
    $ionicModal.fromTemplateUrl('templates/itemDetails.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();           
    };
})


.controller('ItemCtrl', function($scope, $ionicModal){
    $scope.itemList = [
        {id:0, text: "Item 1", checked: false },
        {id:1, text: "Item 2", checked: false },
        {id:2, text: "Item 3", checked: false },
        {id:3, text: "Item 4", checked: false },
        {id:4, text: "Item 5", checked: false },
        {id:5, text: "Item 6", checked: false }
    ];
    
    $scope.itemData = {};
    
    $ionicModal.fromTemplateUrl('templates/selectItem.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();    
    };
    
    $scope.itemData.selectedItem = 'Item 1';
    $scope.updateItem = function(item){
        $scope.itemData.selectedItem = item.text;
    };
})

.controller('SalesOfficeCtrl', function($scope, $ionicModal){
    $scope.officeList = [
        {id:0, text: "Office 1", checked: false },
        {id:1, text: "Office 2", checked: false },
        {id:2, text: "Office 3", checked: false },
        {id:3, text: "Office 4", checked: false },
        {id:4, text: "Office 5", checked: false },
        {id:5, text: "Office 6", checked: false }
    ];
    
    $scope.officeData = {};
    
    $ionicModal.fromTemplateUrl('templates/selectSalesOffice.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();    
    };
    
    $scope.officeData.selectedOffice = 'Office 1';
    $scope.updateOffice = function(item){
        $scope.officeData.selectedOffice = item.text;
    };
})

.controller('CollectionMethodCtrl', function($scope, $ionicModal){
    $scope.collectionMethodList = [
        {id:0, text: "Pick Up By Requestor", checked: false },
        {id:1, text: "Deliver To Requestor", checked: false }        
    ];
    
    $scope.collectionMethodData = {};
    
    $ionicModal.fromTemplateUrl('templates/selectCollectionMethod.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });
        
    $scope.show = function(){
        $scope.modal.show();
    };
    
    $scope.done = function(){
        $scope.modal.hide();    
    };
    
    $scope.collectionMethodData.selectedCollectionMethod = 'Pick Up By Requestor';
    $scope.updateCollectionMethod = function(item){
        $scope.collectionMethodData.selectedCollectionMethod = item.text;
    };
})








.directive('ionGooglePlace', [
        '$ionicTemplateLoader',
        '$ionicBackdrop',
        '$ionicPlatform',
        '$q',
        '$timeout',
        '$rootScope',
        '$document',
        function($ionicTemplateLoader, $ionicBackdrop, $ionicPlatform, $q, $timeout, $rootScope, $document) {
            return {
                require: '?ngModel',
                restrict: 'E',
//                restrict: 'AEC',
                template: '<input type="text" readonly="readonly" class="ion-google-place" autocomplete="off">',
                replace: true,
//                replace: false,
                scope: {
                    ngModel: '=?',
                    geocodeOptions: '='
                },
                link: function(scope, element, attrs, ngModel) {
                    var unbindBackButtonAction;

                    scope.locations = [];
                    var geocoder = new google.maps.Geocoder();
                    var searchEventTimeout = undefined;

                    var POPUP_TPL = [
                        '<div class="ion-google-place-container modal">',
                            '<div class="bar bar-header item-input-inset">',
                                '<label class="item-input-wrapper">',
                                    '<i class="icon ion-ios7-search placeholder-icon"></i>',
                                    '<input class="google-place-search" type="search" ng-model="searchQuery" placeholder="' + (attrs.searchPlaceholder || 'Enter an address, place or ZIP code') + '">',
                                '</label>',
                                '<button class="button button-clear">',
                                    attrs.labelCancel || 'Cancel',
                                '</button>',
                            '</div>',
                            '<ion-content class="has-header has-header">',
                                '<ion-list>',
                                    '<ion-item ng-repeat="location in locations" type="item-text-wrap" ng-click="selectLocation(location)">',
                                        '{{location.formatted_address}}',
                                    '</ion-item>',
                                '</ion-list>',
                            '</ion-content>',
                        '</div>'
                    ].join('');

                    var popupPromise = $ionicTemplateLoader.compile({
                        template: POPUP_TPL,
                        scope: scope,
                        appendTo: $document[0].body
                    });

                    popupPromise.then(function(el){
                        var searchInputElement = angular.element(el.element.find('input'));

                        scope.selectLocation = function(location){
                            ngModel.$setViewValue(location);
                            ngModel.$render();
                            el.element.css('display', 'none');
                            $ionicBackdrop.release();

                            if (unbindBackButtonAction) {
                                unbindBackButtonAction();
                                unbindBackButtonAction = null;
                            }
                        };

                        scope.$watch('searchQuery', function(query){
                            if (searchEventTimeout) $timeout.cancel(searchEventTimeout);
                            searchEventTimeout = $timeout(function() {
                                if(!query) return;
                                if(query.length < 3);

                                var req = scope.geocodeOptions || {};
                                req.address = query;
                                geocoder.geocode(req, function(results, status) {
                                    if (status == google.maps.GeocoderStatus.OK) {
                                        scope.$apply(function(){
                                            scope.locations = results;
                                        });
                                    } else {
                                        // @TODO: Figure out what to do when the geocoding fails
                                    }
                                });
                            }, 350); // we're throttling the input by 350ms to be nice to google's API
                        });

                        var onClick = function(e){
                            e.preventDefault();
                            e.stopPropagation();

                            $ionicBackdrop.retain();
                            unbindBackButtonAction = $ionicPlatform.registerBackButtonAction(closeOnBackButton, 250);

                            el.element.css('display', 'block');
                            searchInputElement[0].focus();
                            setTimeout(function(){
                                searchInputElement[0].focus();
                            },0);
                        };

                        var onCancel = function(e){
                            scope.searchQuery = '';
                            $ionicBackdrop.release();
                            el.element.css('display', 'none');

                            if (unbindBackButtonAction){
                                unbindBackButtonAction();
                                unbindBackButtonAction = null;
                            }
                        };

                        closeOnBackButton = function(e){
                            e.preventDefault();

                            el.element.css('display', 'none');
                            $ionicBackdrop.release();

                            if (unbindBackButtonAction){
                                unbindBackButtonAction();
                                unbindBackButtonAction = null;
                            }
                        }

                        element.bind('click', onClick);
                        element.bind('touchend', onClick);

                        el.element.find('button').bind('click', onCancel);
                    });

                    if(attrs.placeholder){
                        element.attr('placeholder', attrs.placeholder);
                    }


                    ngModel.$formatters.unshift(function (modelValue) {
                        if (!modelValue) return '';
                        return modelValue;
                    });

                    ngModel.$parsers.unshift(function (viewValue) {
                        return viewValue;
                    });

                    ngModel.$render = function(){
                        if(!ngModel.$viewValue){
                            element.val('');
                        } else {
                            element.val(ngModel.$viewValue.formatted_address || '');
                        }
                    };

                    scope.$on("$destroy", function(){
                        if (unbindBackButtonAction){
                            unbindBackButtonAction();
                            unbindBackButtonAction = null;
                        }
                    });
                }
            };
        }
    ])
















;
    
    

