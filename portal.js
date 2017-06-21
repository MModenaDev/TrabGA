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
	
	$routeProvider.when('/registrar',{
        templateUrl: "Panel/registrar.html",
        controller :'registrarControl'
    });

     $routeProvider.otherwise({redirectTo : "/index"});
});

app.controller("pesquisarControl",function($scope){
    $scope.listOpcoes =    [
        { op:"ID", id: 1},
        { op:"Titulo", id: 2},
        { op:"Descrição", id: 3},
        { op:"Data de Entrega", id: 4},
        { op:"Tag", id: 5}
    ];

    $scope.listaLicitacao = [
        {Id:1001, Titulo:"Titulo1", Descricao:"Lorem1 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem1"},
        {Id:1001, Titulo:"Titulo2", Descricao:"Lorem2 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem2"},
        {Id:1001, Titulo:"Titulo3", Descricao:"Lorem3 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem3"},
        {Id:1001, Titulo:"Titulo4", Descricao:"Lorem4 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem4"},
        {Id:1001, Titulo:"Titulo5", Descricao:"Lorem5 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem5"},
        {Id:1001, Titulo:"Titulo6", Descricao:"Lorem6 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem6"},
        {Id:1001, Titulo:"Titulo7", Descricao:"Lorem7 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem7"},
        {Id:1001, Titulo:"Titulo8", Descricao:"Lorem8 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem8"},
        {Id:1001, Titulo:"Titulo9", Descricao:"Lorem9 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem9"},
        {Id:1001, Titulo:"Titulo10", Descricao:"Lorem10 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem10"}
    ];

    $scope.pesquisar = function(palavraBusca){

    }
    
});

app.controller("minhaAreaControl",function($scope){
    $scope.message= "Minha Área"
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

app.controller("registrarControl",function($scope){
    $scope.message= "Registrar"
});

var modalLogin = true;
var modalRegistrar = false;
var modalEsqueciSenha = false;



