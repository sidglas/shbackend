const axios = require('axios')
// index show store update destroy
module.exports = {


  async index (request, response) {
   
    console.log('Provo de Morno')
    console.log('===================================================================')
    console.log(request.params)
    console.log(request.query.gitAddr)
    
    console.log('===================================================================')

    const qr = require('qr-image');

    /*

    get('/qrcode', (_req, res) => {

        console.log('qr qr qrcode')
        //const url = 'https://github.com/Deyo474'
    */
        //const url = 'https://github.com/sidglas'
        const url = request.query.gitAddr
        const code = qr.image(url, { type: 'svg' })
    
        response.type('svg')
        //console.log('ANTES DO PIPE ' , response)
        code.pipe(response)
  
        /*
    })   
        */   
 console.log('VOU RETORNAR OKOKOKOK')  
return ({response})
//    const devs = await Dev.find()
//    return response.json(devs)
  },
}