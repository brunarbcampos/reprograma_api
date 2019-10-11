const professoras = require("../model/professoras.json")

exports.get = (request, response) => {
    console.log(request.url)
    response.status(200).send(professoras)
}
