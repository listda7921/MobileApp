namespace MyApp.Controllers {

    class HomeController {
        public customers;

        constructor() {
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
    }

    angular.module('MyApp').controller('HomeController', HomeController);


    class AboutController {

    }

    angular.module('MyApp').controller('AboutController', AboutController);


}