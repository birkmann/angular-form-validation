"use strict";

var myApp = angular.module('myApp', [
    'ngRoute',
    'ngMessages'
]);

myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/view1', {
        templateUrl:'templates/basic-form.html',
        controller: 'formController'
    })
    .when('/view2', {
        templateUrl:'/templates/view2.html',
        controller: 'view2Ctrl'
    })
    .otherwise({
        redirectTo: '/view1'
    });
});