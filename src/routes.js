const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)

    //Metodos http -> GET POST PUT DELETE
    //Tipos de parâmetros:
    //Query Params: request.query usados para filtros, ordenação, paginação
    //Route Params: request.params para identificar um recurso na alteração / remoção de UM recurso
    //Body  request.body   util para enviar informações. principalmente no put e post

    module.exports = routes