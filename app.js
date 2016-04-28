var bodyParser = require("body-parser"),
mongoose       = require("mongoose"),
express        = require("express"),
app            = express();

// APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

Blog.create({
    title: "Test blog",
    image: "https://pixabay.com/static/uploads/photo/2013/07/12/16/24/fried-egg-150835_960_720.png",
    body: "Hello this is a blog post about eggs"
});

// RESTFUL ROUTES



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("server is running!");
});