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


.controller('CostDetailsCtrl', function($scope, $ionicModal){
    
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
    
})

.controller('CategoriesCtrl', function($scope, $ionicModal){
     $scope.categoriesList = [
        {id:0, text: "Inventory", checked: false },
        {id:1, text: "Venue Application & Payment", checked: false },
        {id:2, text: "Set Up Arrangement & Logistic", checked: false },
        {id:3, text: "Accomodation & Transportation", checked: false }
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
    
    $scope.categoriesData.selectedCategories = 'Inventory';
    $scope.updateCategories = function(item){
        $scope.categoriesData.selectedCategories = item.text;
    };
    
    
})




;
    
    

