const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const PORT = process.env.PORT || 8080


app.engine('mustache',mustacheExpress())
app.set('views','./views')
app.set('view engine','mustache')
app.use(express.static('css'))
app.use(express.static('images'))
app.use(express.static('js'))
app.use(express.static('public'))

app.get('/', (req,res) => {
  res.render('home')
})

app.listen(PORT,function(){
  console.log("Prepare for the volley... Served.")
})
