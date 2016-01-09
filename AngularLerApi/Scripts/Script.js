(function () {
    'use strict';

    var numeros = angular.module("myModule", [])
    .controller("myController", function ($scope, $http, $log) {

        var sucessoCalBack = function (response) {
            $scope.detalhes = response.data;
        };

        var erroCalBack = function (response) {
            $scope.error = response.data;
        };

		//não está funcionando
		//is not working
        $scope.getAll = function (idusuario) {
            var config = {
                method: 'GET',
                url: 'http://www.sistemaguardiao.com.br/webapi/api/AspNetWebApi/consulta/JogosPorID/' + idusuario
            };
            $http(config).then(sucessoCalBack, erroCalBack);
        };

		
        //assim funciona, passando o parametro direto 
		//how it works, through direct parameter
        $http({
            method: 'GET',
            params: { idusuario: 5 },
            url: 'http://www.sistemaguardiao.com.br/webapi/api/AspNetWebApi/consulta/JogosPorID/5'})
            .then(sucessoCalBack,erroCalBack);
        });



})();