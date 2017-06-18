var app = angular.module("myapp",["ngRoute"]);
app.config(function($routeProvider){

    $routeProvider.when('/',{
        templateUrl: "Panel/minhaArea.html",
        controller :'minhaAreaControl'
    });
         
     $routeProvider.when('/pesquisa',{
        templateUrl: "Panel/pesquisar.html",
        controller :'pesquisarControl'
    });

    $routeProvider.when('/novasLicit',{
        templateUrl: "Panel/novasLicit.html",
        controller :'novasLicitControl'
    });

    $routeProvider.when('/historico',{
        templateUrl: "Panel/historico.html",
        controller :'historicoControl'
    });

    $routeProvider.when('/verPainel',{
        templateUrl: "Panel/verPainel.html",
        controller :'verPainelControl'
    });

    $routeProvider.when('/objetivos',{
        templateUrl: "Panel/objetivos.html",
        controller :'objetivosControl'
    });

    $routeProvider.when('/quemSomos',{
        templateUrl: "Panel/quemSomos.html",
        controller :'quemSomosControl'
    });
     
    $routeProvider.when('/contatos',{
        templateUrl: "Panel/contatos.html",
        controller :'contatosControl'
    });

     $routeProvider.when('/mapaDoSite',{
        templateUrl: "Panel/mapaDoSite.html",
        controller :'mapaDoSiteControl'
    });

      $routeProvider.when('/entrar',{
        templateUrl: "Panel/entrar.html",
        controller :'entrarControl'
    });

     $routeProvider.otherwise({redirectTo : "/index"});
});


app.controller("minhaAreaControl",function($scope){
    $scope.message= "Minha Área"
});

app.controller("pesquisarControl",function($scope){
    $scope.message= "Pesquisar"
});

app.controller("novasLicitControl",function($scope){
    $scope.message= "Novas Licitações"
});

app.controller("historicoControl",function($scope){
    $scope.message= "Histórico"
});

app.controller("verPainelControl",function($scope){
    $scope.message= "Ver Painel"
});

app.controller("objetivosControl",function($scope){
    $scope.message= "Objetivos"
});

app.controller("quemSomosControl",function($scope){
    $scope.message= "Quem somos"
});

app.controller("contatosControl",function($scope){
    $scope.message= "Contatos"
});

app.controller("mapaDoSiteControl",function($scope){
    $scope.message= "Mapa do Site"
});

app.controller("entrarControl",function($scope){
    $scope.message= "Entrar"
});


