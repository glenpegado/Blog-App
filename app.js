let bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express()


// APP CONFIG
mongoose.connect( "mongodb://localhost/restful_blog_app", {
    useNewUrlParser: true
} );
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


// MONGOOSE / MODEL CONFIG
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    vody: String,
    created: {type: Date, default: Date.now}
})
let Blog = mongoose.model( 'Blog', blogSchema )



/// RESTFUL ROUTES
app.get( '/', ( req, res ) => {
    res.redirect( '/blogs' )
} )

app.get( '/blogs', ( req, res ) => {
    res.render( 'index' )
} )




app.listen(process.env.PORT, process.env.IP, () => {
    console.log('SERVER IS RUNNING!')
})