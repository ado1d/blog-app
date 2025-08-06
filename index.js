import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));





app.get("/", (req, res) => {
    var lastPosts = posts.slice(-5);
    lastPosts.reverse();
    res.render("index.ejs", { recentPosts: lastPosts, allPosts: posts });
});


app.get("/allposts", (req, res) => {
    res.render("allposts.ejs", { allPosts: posts });
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

app.post("/create", (req, res) => {
    var body = req.body;
    var newPost = new BlogPost(body.blogTitle, body.authorName, body.blogContent);
    posts.push(newPost);
    res.render("post.ejs", { postObject: newPost });
});

app.post("/posts", (req, res) => {
    var lastPosts = posts.slice(-5);
    lastPosts.reverse();
    var postIndex = req.body.index;
    res.render("post.ejs", { postObject: lastPosts[postIndex] });
});

app.post("/viewpost", (req, res) => {
    var postIndex = req.body.index;
    res.render("post.ejs", { postObject: posts[postIndex] });
});


app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});

// BlogPost Class
class BlogPost {
    constructor(title, author, content) {
        this.title = title;
        this.author = author;
        this.content = content;
    }

    getSummary() {
        return `${this.title} by ${this.author}`;
    }

    getSubString() {
        return this.content.slice(0, 60);
    }
}

// Initial posts array
var posts = [];

const post1 = new BlogPost("Lion King Ayman", "Ayman", "Ayman is a very good boy and very helpful too.");
const post2 = new BlogPost("Hogay current", "Junayed", "CSS is used for styling web pages. Ajnkjdnfksdkjnkj Bolod adfnk asdnj");
const post3 = new BlogPost("Hogay ghu", "Akib", "CSS is used for styling web pages. Ajnkjdnfksdkjnkj Bolod adfnk asdnj");
const post4 = new BlogPost("Mathay ghu", "Mushfik", "CSS is used for styling dfdfdfd pages. Ajnkjdnfksdkjnkj Bolod adfnk asdnj");

posts.push(post1, post2, post3, post4);
