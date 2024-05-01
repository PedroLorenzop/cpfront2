/* Pagina Sugestões 

function mostrarTexto() {
  var opcaoSelecionada = document.getElementById("opcao").value;
  var textoEscolhido = document.getElementById("textoEscolhido");

  switch (opcaoSelecionada) {
    case "opcao1":
      textoEscolhido.innerHTML = "<p><strong>Entrada</strong> - (Carpaccio de Carne) O carpaccio de carne é uma receita requintada que promete surpreender com seus sabores quando acompanhado por uma taça de vinho tinto! Que seja preferencialmente feito com carne fresca, nunca antes congelada..</p><p><strong>Prato principal</strong> - (Espaguete à Carbonara) Sua taça de vinho tinto pede muito por um espaguete! Esse à carbonara combina perfeitamente com a bebida, sendo um clássico das mesas italianas. Seu rendimento são 4 porções, ou seja, para um jantar caprichado!</p> <p><strong>Sobremesa</strong> - Embora para muitos pareça estranho e inacreditável, o vinho tinto com seu caráter, sabor e força é um companheiro perfeito para aquelas sobremesas de chocolate.</p> <p><strong>Receitas</strong> - <a href='https://www.receiteria.com.br/receita/carpaccio-de-carne/' target=_blank>Carpaccio de carene</a> , <a href='https://www.receiteria.com.br/receita/espaguete-a-carbonara/' target=_blank>Espaguete à carbonara</a></p>";
      break;
    case "opcao2":
      textoEscolhido.innerHTML = "<p><strong>Entrada</strong> - (Ceviche) Um prato de ceviche de tilápia combina muito bem com um vinho branco leve e cítrico. Neste caso, a acidez do vinho ressalta os sabores frescos e a própria acidez do prato. Esta é uma ótima escolha para o verão, especialmente para quem têm à disposição peixes frescos.</p> <p><strong>Prato Principal</strong> - (Frango ao limão) Pratos com carnes brancas, como de aves, sempre são bem vindos com uma boa garrafa de vinho branco Eles se harmonizam com vinhos brancos, especialmente quando preparados com limão e temperos cítricos. O frango marinado com limão é uma excelente alternativa que cumpre com esses requisitos. O frango grelhado com limão também pode se encaixar bem na proposta.</p> <p><strong>Sobremesa</strong> - Os vinhos brancos combinam muito bem com qualquer sobremesa leve, se for uma daquelas à base de creme de manteiga ou de creme de leite, e aquelas em que se destaca a baunilha.</p>  <p><strong>Receitas</strong> - <a href='https://receitinhas.com.br/receita/ceviche-de-tilapia/' target=_blank>Chevice</a> , <a href='https://receitinhas.com.br/receita/frango-com-limao/' target=_blank>Frango ao limão</a></p>";
      break;
    case "opcao3":
      textoEscolhido.innerHTML = "<p><strong>Entrada</strong> - (Bruschetta) Uma sugestão de entrada ou de aperitivo para um final de tarde, temos a sugestão da bruschetta com presunto parma e nectarina. Pelo presunto de parma ser um embutido, o vinho rosé permite a limpeza do paladar. Dessa forma, você consegue apreciar os demais sabores, como o da nectarina.</p> <p><strong>Prato Principal</strong> - (Bacalhau ao brás) A receita de bacalhau ao Brás é originária de Portugal, mas caiu no gosto dos brasileiros. O azeite, a cebola e os temperos usados no preparo do prato que permitem uma combinação harmoniosa com o vinho rosé.</p> <p><strong>Sobremesa</strong> - O vinho rosé é um vinho muito versátil, por isso é um agradável companheiro para qualquer tipo de sobremesa, desde chocolate, frutas e cremes que combinam muito bem com essa bebida.</p> <p><strong>Receita</strong> - <a href='https://receitinhas.com.br/receita/bruschetta-com-presunto-de-parma-e-nectarina/' target=_blank>Bruschetta</a> , <a href='https://receitinhas.com.br/receita/bacalhau-a-bras/' target=_blank>Bacalhau ao brás</a></p>";
      break;
    default:      
      textoEscolhido.innerHTML = "<p>Escolha uma opção.<p>";
  }
}

document.getElementById("opcao").addEventListener("change", mostrarTexto);
*/
// Função para exibir informações sobre vinhos
// Seleciona todos os elementos de opção de vinho
// Seleciona todos os elementos de opção de vinho
var opcoesVinho = document.querySelectorAll('.selecao-vinhos li');

// Função para exibir informações sobre vinhos
function exibirInformacoesVinho(opcao) {
    var informacoes;

    // Usando switch para lidar com diferentes opções
    switch(opcao) {
        case 'branco':
            informacoes = "<p><strong>Entrada</strong> - (Ceviche) Um prato de ceviche de tilápia combina muito bem com um vinho branco leve e cítrico. Neste caso, a acidez do vinho ressalta os sabores frescos e a própria acidez do prato. Esta é uma ótima escolha para o verão, especialmente para quem têm à disposição peixes frescos.</p> <p><strong>Prato Principal</strong> - (Frango ao limão) Pratos com carnes brancas, como de aves, sempre são bem vindos com uma boa garrafa de vinho branco Eles se harmonizam com vinhos brancos, especialmente quando preparados com limão e temperos cítricos. O frango marinado com limão é uma excelente alternativa que cumpre com esses requisitos. O frango grelhado com limão também pode se encaixar bem na proposta.</p> <p><strong>Sobremesa</strong> - Os vinhos brancos combinam muito bem com qualquer sobremesa leve, se for uma daquelas à base de creme de manteiga ou de creme de leite, e aquelas em que se destaca a baunilha.</p>  <p><strong>Receitas</strong> - <a href='https://receitinhas.com.br/receita/ceviche-de-tilapia/' target=_blank>Chevice</a> , <a href='https://receitinhas.com.br/receita/frango-com-limao/' target=_blank>Frango ao limão</a></p>";
            break;
        case 'rose':
            informacoes = "<p><strong>Entrada</strong> - (Bruschetta) Uma sugestão de entrada ou de aperitivo para um final de tarde, temos a sugestão da bruschetta com presunto parma e nectarina. Pelo presunto de parma ser um embutido, o vinho rosé permite a limpeza do paladar. Dessa forma, você consegue apreciar os demais sabores, como o da nectarina.</p> <p><strong>Prato Principal</strong> - (Bacalhau ao brás) A receita de bacalhau ao Brás é originária de Portugal, mas caiu no gosto dos brasileiros. O azeite, a cebola e os temperos usados no preparo do prato que permitem uma combinação harmoniosa com o vinho rosé.</p> <p><strong>Sobremesa</strong> - O vinho rosé é um vinho muito versátil, por isso é um agradável companheiro para qualquer tipo de sobremesa, desde chocolate, frutas e cremes que combinam muito bem com essa bebida.</p> <p><strong>Receita</strong> - <a href='https://receitinhas.com.br/receita/bruschetta-com-presunto-de-parma-e-nectarina/' target=_blank>Bruschetta</a> , <a href='https://receitinhas.com.br/receita/bacalhau-a-bras/' target=_blank>Bacalhau ao brás</a></p>";
            break;
        case 'tinto':
            informacoes = `<p><strong>Entrada</strong> - (Carpaccio de Carne) O carpaccio de carne é uma receita requintada que promete surpreender com seus sabores quando acompanhado por uma taça de vinho tinto! Que seja preferencialmente feito com carne fresca, nunca antes congelada..</p><p><strong>Prato principal</strong> - (Espaguete à Carbonara) Sua taça de vinho tinto pede muito por um espaguete! Esse à carbonara combina perfeitamente com a bebida, sendo um clássico das mesas italianas. Seu rendimento são 4 porções, ou seja, para um jantar caprichado!</p> <p><strong>Sobremesa</strong> - Embora para muitos pareça estranho e inacreditável, o vinho tinto com seu caráter, sabor e força é um companheiro perfeito para aquelas sobremesas de chocolate.</p> <p><strong>Receitas</strong> - <a href='https://www.receiteria.com.br/receita/carpaccio-de-carne/' target=_blank>Carpaccio de carene</a> , <a href='https://www.receiteria.com.br/receita/espaguete-a-carbonara/' target=_blank>Espaguete à carbonara</a></p>`;
            break;
        default:
            informacoes = 'Por favor, selecione uma opção válida.';
    }

    // Exibindo as informações
    var elementoDescricao = document.getElementById('descricao');
    elementoDescricao.innerHTML = informacoes; // Aqui está a mudança
}

// Adiciona um evento de clique a cada opção de vinho
opcoesVinho.forEach(function(opcaoVinho) {
    opcaoVinho.addEventListener('click', function() {
        var valorOpcao = this.querySelector('input').value;
        exibirInformacoesVinho(valorOpcao);
    });
});