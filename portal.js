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
	
	$routeProvider.when('/trocarSenha',{
        templateUrl: "Panel/trocarSenha.html",
        controller :'trocarSenhaControl'
    });

     $routeProvider.otherwise({redirectTo : "/index"});
});

app.controller("pesquisarControl",function($scope){
    $scope.listOpcoes =    [
        { op2:"Id",op:"Id", id: 1},
        { op2:"Titulo",op:"Titulo", id: 2},
        { op2:"Descricao",op:"Descrição", id: 3},
        { op2:"Data",op:"Data de Entrega", id: 4},
        { op2:"Tags",op:"Tags", id: 5}
    ];

    var listaLicitacaoTemp = [
        {Id:1001, Titulo:"Titulo1", Descricao:"Lorem1 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem1"},
        {Id:1002, Titulo:"Titulo2", Descricao:"Lorem2 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem2"},
        {Id:1003, Titulo:"Titulo3", Descricao:"Lorem3 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem3"},
        {Id:1004, Titulo:"Titulo4", Descricao:"Lorem4 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem4"},
        {Id:1005, Titulo:"Titulo5", Descricao:"Lorem5 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem5"},
        {Id:1006, Titulo:"Titulo6", Descricao:"Lorem6 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem6"},
        {Id:1007, Titulo:"Titulo7", Descricao:"Lorem7 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem7"},
        {Id:1008, Titulo:"Titulo8", Descricao:"Lorem8 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem8"},
        {Id:1009, Titulo:"Titulo9", Descricao:"Lorem9 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem9"},
        {Id:1010, Titulo:"Titulo10", Descricao:"Lorem10 Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor [...]", Data: new Date(), Tags:"Lorem10"}
    ];

$scope.listaLicitacao = listaLicitacaoTemp;

$scope.pesquisarLicitacao = function(campoBusca,tipoBusca){
      switch(tipoBusca) {
        case "Id":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Id == campoBusca; });
             console.log(tipoBusca);
            break;
        case "Titulo":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Titulo.indexOf(campoBusca) !== -1 });
            break;
        case "Descricao":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Descricao.indexOf(campoBusca) !== -1 });
            break;
        case "Data":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Data == campoBusca; });
            break;
        case "Tags":
             $scope.listaLicitacao = listaLicitacaoTemp.filter(function(obj) { return obj.Tags == campoBusca; });
            break;   

        default:
           $scope.listaLicitacao = listaLicitacaoTemp;
        }		   
	}

$scope.OrdenarPor = function(campo){
    $scope.criterioDeOrdenacao = campo;
    $scope.direcaoOrdenacao =! $scope.direcaoOrdenacao;
}
        
});

app.controller("minhaAreaControl",function($scope){
    $scope.message= "Minha Área"
	
	$scope.listaTags = [
		{name:"TAG1"},
		{name:"TAG2"},
		{name:"TAG3"}
	];
	
	$scope.addTag = function(){
		$scope.listaTags.push({name:$scope.adicTag});
		$scope.adicTag = '';
	}
	
	$scope.removeTag = function(){
		$scope.remTag = '';
		var index = $scope.listaTags.indexOf($scope.remTag.name);
		$scope.listaTags.splice(index, 1);
	}
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
    $scope.message= "Quem Somos"
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

app.controller("trocarSenhaControl",function($scope){
    $scope.message= "Trocar Senha"
});

var modalLogin = true;
var modalRegistrar = false;
var modalEsqueciSenha = false;