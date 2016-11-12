angular.module("listaTelefonica").filter("name", function () {
  return function (input) {
    var listaDeNomes = input.split(" ");
    var nomesFormatados = listaDeNomes.map(function (nome) {
      if (/(da|de|dos|das)/.test(nome.toLowerCase())) return nome.toLowerCase();
      return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
    });
    return nomesFormatados.join(" ");
  };
});