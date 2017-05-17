var portalLic = angular.module('portalLic', ['ngRoute']);

portalLic.config(function ($routeProvider) {			// configs a router to change pages
    
    $routeProvider
    
    .when('/', {			// sends home to panel
        templateUrl: 'Panel/minhaArea.html',
        controller: 'mainController'
    })
	
	.when('/pesquisar', {			// sends Pesquisar to panel
        templateUrl: 'Panel/pesquisar.html',
        controller: 'mainController'
    })
	
	.when('/novasLicit', {			// sends Novas Licitacoes to panel
        templateUrl: 'Panel/novasLicit.html',
        controller: 'mainController'
    })
	
	.when('/historico', {			// sends Historico to panel
        templateUrl: 'Panel/historico.html',
        controller: 'mainController'
    })
	
	.when('/painel', {			// sends Painel to panel
        templateUrl: 'Panel/verPainel.html',
        controller: 'mainController'
    })
	
	.when('/objetivos', {			// sends Objetivos to panel
        templateUrl: 'Panel/objetivos.html',
        controller: 'mainController'
    })
	
	.when('/quemSomos', {			// sends Quem Somos to panel
        templateUrl: 'Panel/quemSomos.html',
        controller: 'mainController'
    })
	
	.when('/contatos', {			// sends Contatos to panel
        templateUrl: 'Panel/contatos.html',
        controller: 'mainController'
    })
	
	.when('/mapa', {			// sends Mapa do Site to panel
        templateUrl: 'Panel/mapaDoSite.html',
        controller: 'mainController'
    })
	
	.when('/entrar', {			// sends Entrar to panel
        templateUrl: 'Panel/entrar.html',
        controller: 'mainController'
    })
    
});

portalLic.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = 'Main';
    
}]);

