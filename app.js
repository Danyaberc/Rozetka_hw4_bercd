const express = require('express')

const server = express()
const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')
const reviewsRouter = require('./routes/reviews')
const catalogRouter = require('./routes/catalog')


server.set('view engine', 'ejs')
server.set('views', __dirname + '/views/pages')

server.use(express.static(__dirname + '/public'))

server.listen(3000)
console.log('RUN')

server.use('/', indexRouter)
server.use('/about', aboutRouter)
server.use('/reviews', reviewsRouter)
server.use('/catalog', catalogRouter)