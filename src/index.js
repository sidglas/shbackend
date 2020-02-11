const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express();
//mongoose.connect('mongodb+srv://omnistack08:passwor@cluster0-jvpkk.mongodb.net/test?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://omnistack08:omnistack08@cluster0-jvpkk.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,  
})

app.use(cors({origin:'http://localhost:3000'}))
//app.use(cors())

//
//('mongodb+srv://omnistack08:<password>@cluster0-jvpkk.mongodb.net/test')
//('mongodb+srv://omnistack08:omnistack08@cluster0-jvpkk.mongodb.net/test')
//mongodb+srv://omnistack08:<omnistack08>@cluster0-jvpkk.mongodb.net/test?retryWrites=true&w=majority

app.use(express.json())
app.use(routes)

app.listen(3333)
//para rodar o dev e o front juntos (3333 e 3000)
//yarn add cors
//fazer o que é feito aqui com o cors)