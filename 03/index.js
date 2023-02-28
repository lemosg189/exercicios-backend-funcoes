const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        let totalItens = 0;
        let precoTotalCents = 0;

        for (let produto of carrinho.produtos) {

            totalItens += produto.qtd
            precoTotalCents += produto.qtd * produto.precoUnit // se eu quisesse o preço de cada um separadamente?
        }

        let precoTotalReais = precoTotalCents / 100;

        console.log(`Cliente: ${carrinho.nomeDoCliente} 
        Total de itens: ${totalItens} itens 
        Total a pagar: R$ ${precoTotalReais}`)
    }

}

function addProdutoAoCarrinho(carrinho, produto) {
    //produtos.push(produto)

}


