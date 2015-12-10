namespace MyApp {
    angular.module('MyApp', ['ionic'])
        .config(($urlRouterProvider, $stateProvider) => {
            // Ionic uses AngularUI Router which uses the concept of states
            // Learn more here: https://github.com/angular-ui/ui-router
            // Set up the various states which the app can be in.
            // Each state's controller can be found in controllers.js
            $stateProvider

                // setup an abstract state for the tabs directive
                .state('tab', {
                    url: "/tab",
                    abstract: true,
                    templateUrl: "views/tabs.html"
                })

                // Each tab has its own nav history stack:

                .state('tab.home', {
                    url: '/home',
                    views: {
                        'tab-home': {
                            templateUrl: 'views/tab-home.html',
                            controller: 'HomeController as controller'
                        }
                    }
                })
                .state('tab.about', {
                    url: '/about',
                    views: {
                        'tab-about': {
                            templateUrl: 'views/tab-about.html',
                            controller: 'AboutController as controller'
                        }
                    }
                });

            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/tab/home');
        })
        .run(function ($ionicPlatform: ionic.platform.IonicPlatformService) {
            $ionicPlatform.ready(() => {
              
            });
        })
}