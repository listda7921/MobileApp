// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397705
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
var CoderCampsIonic;
(function (CoderCampsIonic) {
    "use strict";
    var Application;
    (function (Application) {
        function initialize() {
            document.addEventListener('deviceready', onDeviceReady, false);
        }
        Application.initialize = initialize;
        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        }
        function onPause() {
            // TODO: This application has been suspended. Save application state here.
        }
        function onResume() {
            // TODO: This application has been reactivated. Restore application state here.
        }
    })(Application = CoderCampsIonic.Application || (CoderCampsIonic.Application = {}));
    window.onload = function () {
        Application.initialize();
    };
})(CoderCampsIonic || (CoderCampsIonic = {}));
var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ionic'])
        .config(function ($urlRouterProvider, $stateProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "views/tabs.html"
        })
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
        .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
        });
    });
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
                this.customers = [
                    {
                        imageUrl: "https://upload.wikimedia.org/wikipedia/en/2/25/KyleBroflovski.png",
                        name: "Kyle"
                    },
                    {
                        imageUrl: "http://vignette1.wikia.nocookie.net/southpark/images/4/4b/Timmy.png/revision/latest?cb=20140829152731",
                        name: "Timmy"
                    },
                    {
                        imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png",
                        name: "Cartman"
                    }
                ];
            }
            return HomeController;
        })();
        angular.module('MyApp').controller('HomeController', HomeController);
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        })();
        angular.module('MyApp').controller('AboutController', AboutController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=appBundle.js.map