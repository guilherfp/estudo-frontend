angular.module("listaTelefonica").filter("labelOperadora", function (currencyFilter) {
  return function (operadora) {
    return operadora.nome + ' ( ' + currencyFilter(operadora.preco) + ' )';
  };
});