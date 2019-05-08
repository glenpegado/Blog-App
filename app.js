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

Blog.create({
    title: 'test Blog',
    image: 'https://images.unsplash.com/photo-1556229010-aa3f7ff66b24?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80',
    body: 'This is a blog post'
});



// RESTFUL ROUTES
app.get( '/blogs', ( req, res ) => {
    res.render( 'index' )
} )


app.listen(process.env.PORT, process.env.IP, () =>{
    console.log('SERVER IS RUNNING!')
})