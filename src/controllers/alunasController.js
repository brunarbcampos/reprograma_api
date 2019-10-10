const alunas = require("../model/alunas.json")

exports.get = (request, response) => {
    console.log(request.url)
    response.status(200).send(alunas)
}

exports.getById = (request, response) => {
    const id = request.params.id
    //console.log(id)
        if(id > 17 || id <= 0){
            response.redirect(301, "http://pudim.com.br/")
        }
    const aluna = alunas.find(aluna => aluna.id == id)
    /*response.status(200).send(alunas.find(aluna => aluna.id == id))  //mudou porque if*/

    
    if(id > 17 || id <= 0){
        response.send('404 ID N0T F0UND :(')
    }

    response.status(200).send(aluna)
}

exports.getBooks = (request, response) => {
    const id= request.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    //console.log(aluna) <- pra ver o que é aluna

    if(!aluna){
        response.send('404 G!RL N0T F0UND!!!!1!1!')
    }

    const livros = aluna.livros
    const tituloLivros = livros.map(livro => livro.titulo)
    response.status(200).send(tituloLivros)
}

exports.getSp = (request, response) => {
    const aluna = alunas.filter(aluna => aluna.nasceuEmSp == "true")
    const Paulista = aluna.map(aluna => aluna.nome)
    response.status(200).send(Paulista)
}
