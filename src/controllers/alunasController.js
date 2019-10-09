const alunas = require("../model/alunas.json")

exports.get = (request, response) => {
    console.log(request.url)
    response.status(200).send(alunas)
}

exports.getById = (request, response) => {
    const id = request.params.id
    console.log(id)
    response.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (request, response) => {
    const id= request.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    //console.log(aluna) <- pra ver o que é aluna
    const livros = aluna.livros
    const tituloLivros = livros.map(livro => livro.titulo)
    response.status(200).send(titulo))
}