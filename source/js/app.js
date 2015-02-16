"use strict";

var myApp = angular.module('myApp', [
    'ngRoute',
    'ngMessages'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/contact', {
        templateUrl:'templates/basic-form.html',
        controller: 'formController'
    })
    .when('/view2', {
        templateUrl:'/templates/view2.html',
        controller: 'view2Ctrl'
    })
    .otherwise({
        redirectTo: '/contact'
    });
});