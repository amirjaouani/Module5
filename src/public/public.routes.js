(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.signupform', {
      url: '/signupform',
      templateUrl: 'src/public/menu-sign-up-form/menu-sign-up-form.html',
      controller: 'MenuFormController',
      controllerAs: 'menuFormCtrl',
      resolve: {
        menuForm: ['MenuService', function (MenuService) {
          return MenuService.getForm();
        }]
      }
    })
    .state('public.myinfo', {
      url: '/myinfo/{category}',
      templateUrl: 'src/public/menu-my-info/menu-my-info.html',
      controller: 'MenuMyInfoController',
      controllerAs: 'menuMyInfoCtrl',
      resolve: {
        menuForm: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();
