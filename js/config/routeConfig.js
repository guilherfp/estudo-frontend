angular.module("listaTelefonica").config(function ($routeProvider) {
  $routeProvider.when("/contatos", {
    templateUrl: "view/contatos.html",
    controller: "contatosCtrl",
    resolve: {
      contatos: function (contatosApi) {
        return contatosApi.getContatos();
      }
    }
  });
  $routeProvider.when("/novo", {
    templateUrl: "view/novoContato.html",
    controller: "novoContatoCtrl",
    resolve: {
      operadoras: function (operadorasApi) {
        return operadorasApi.getOperadoras();
      }
    }
  });
  $routeProvider.when("/contato/:id", {
    templateUrl: "view/detalheContato.html",
    controller: "detalhesContatoCtrl",
    resolve: {
      contato: function(contatosApi, $route) {
        var id = $route.current.params.id;
        return contatosApi.getContato(id);
      }
    }
  });
  $routeProvider.when("/error", {
    templateUrl: "view/error.html"
  });
  $routeProvider.otherwise({ redirectTo: "/contatos" });
});