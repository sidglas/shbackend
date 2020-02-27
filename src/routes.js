const { Router } = require('express')
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const QrcodeController = require('./controllers/QrcodeController')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)
routes.get('/qrcode', QrcodeController.index)

/*
const qr = require('qr-image');

app.get('/qrcode', (_req, res) => {
    //const url = 'https://github.com/Deyo474'
    const url = 'https://github.com/sidglas'
    const code = qr.image(url, { type: 'svg' })

    res.type('svg')

    code.pipe(res)

})
*/



    //Metodos http -> GET POST PUT DELETE
    //Tipos de parâmetros:
    //Query Params: request.query usados para filtros, ordenação, paginação
    //Route Params: request.params para identificar um recurso na alteração / remoção de UM recurso
    //Body  request.body   util para enviar informações. principalmente no put e post

    module.exports = routes