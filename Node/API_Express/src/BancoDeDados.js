const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) { //se o produto não ter id, o mesmo é inserido
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) { //pega por id
    return produtos[id] || {}
}

function getProdutos() { //pega todos pelo objetp
    return Object.values(produtos)
}

module.exports = { salvarProduto, getProduto, getProdutos } //exportando as chamadas