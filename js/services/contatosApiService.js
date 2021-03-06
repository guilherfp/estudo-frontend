angular.module("listaTelefonica").factory("contatosApi", function ($http, config) {
  var _getContatos = function () {
    return $http.get(config.baseUrl + "/contatos");
  };

  var _getContato = function (id) {
    return $http.get(config.baseUrl + "/contatos/" + id);
  };

  var _saveContato = function (contato) {
    return $http.post(config.baseUrl + "/contatos", contato);
  };

  var _teste = function (teste) {
    return $http.post(config.baseUrl + "/teste", teste);
  };

  return {
    getContatos: _getContatos,
    getContato: _getContato,
    saveContato: _saveContato,
    teste: _teste
  };
});