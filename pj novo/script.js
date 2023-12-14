

  function calcularPrecoTotal() {
    // Obter os valores dos campos de entrada do HTML
    const precoUnitario = 2599.99; // Preço unitário do produto - corrigido para representar um número float
    const quantidade = parseFloat(document.getElementById('quantidade').value);

    // Verificar se os valores inseridos são números válidos
    if (isNaN(quantidade) || quantidade <= 0) {
      document.getElementById('resultado').innerHTML = "Por favor, insira uma quantidade válida maior que zero.";
    } else {
      // Calcular o preço total
      const precoTotal = precoUnitario * quantidade;
      document.getElementById('resultado').innerHTML = "Preço total: R$" + precoTotal.toFixed(2);
    }
  }
 
   
  
