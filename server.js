
let express = require('express')
let bodyParser = require('body-parser');
let session = require('express-session');
let crypto = require('crypto');
let app = express();
let port = 3000;

const fs = require('fs');

// Citire BD
let rawdata = fs.readFileSync('data/database.json');
let studentBD = JSON.parse(rawdata);
// Citire BD2
let rawdata2 = fs.readFileSync('data/user.json');
let userBD = JSON.parse(rawdata2);
// Citire BD3
let rawdata3 = fs.readFileSync('data/comment.json');
let commentBD = JSON.parse(rawdata3);

function add_student(studentData) {
   studentBD['studenti'].push(studentData);
   studentBD['nextId'] = parseInt(studentBD['nextId']) + 1;
   console.log(studentBD);
   let data = JSON.stringify(studentBD);//transform in sir
   fs.writeFileSync("data/database.json", data);///scriu in fisier
   
}

function add_comment(commData) {
   commentBD['comentarii'].push(commData);
   commentBD['nextId'] = parseInt(commentBD['nextId']) + 1;
   console.log(commentBD);
   let data = JSON.stringify(commentBD);//transform in sir
   fs.writeFileSync("data/comment.json", data);///scriu in fisier
}
function delete_comment(commData)
{
   let commentId=commData.dislikeCommentId;
   commentBD['comentarii'].forEach((comment,index,lista_com) => { 
      if(comment['id']==commentId)
      {
         lista_com.splice(index,1);
      }
   });
   console.log(commentBD);
   let data = JSON.stringify(commentBD);//transform in sir
   fs.writeFileSync("data/comment.json", data);///scriu in fisier
}

// Use this code as is. 
app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, access-control-allow-origin")
   next();
});

app.use(session({
   secret: 'Yamaha',//folosit de express session pentru criptarea id-ului de sesiune
   resave: true,
   saveUninitialized: false
}
));
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


// What you get if you go on the default route of the server. It's good to keep something here whether you use it or not.

app.get('/sophia_style.css', function (req, res) {
   res.sendFile('css/sophia_style.css', { root: __dirname })
});
app.get('/', function (req, res) {
   res.render('sophia.ejs', { root: __dirname });
});
app.get('/sophia.html', function (req, res) {
   res.render('sophia.ejs', { root: __dirname })
});

app.get('/about.html', function (req, res) {
   res.render('about.ejs', { root: __dirname })
});
app.get('/contest.html', function (req, res) {
   res.render('contest.ejs', { root: __dirname })
});
app.get('/galery.html', function (req, res) {
   res.render('galery.ejs', { root: __dirname })
});
app.get('/inscrieri.html', function (req, res) {
   res.render('inscrieri_menu.ejs', { root: __dirname })
});
// app.get('/contact.html', function (req, res) {
//    res.render('contact.ejs', { root: __dirname })
// });

app.get('/about1.jpg', function (req, res) {
   res.sendFile('/img/about1.jpg', { root: __dirname })
});
app.get('/fb.png', function (req, res) {
   res.sendFile('/img/fb.png', { root: __dirname })
});
app.get('/insta.png', function (req, res) {
   res.sendFile('/img/insta.png', { root: __dirname })
});
app.get('/lego.jpg', function (req, res) {
   res.sendFile('/img/lego.jpg', { root: __dirname })
});
app.get('/phone.png', function (req, res) {
   res.sendFile('/img/phone.png', { root: __dirname })
});
app.get('/poza1.jpg', function (req, res) {
   res.sendFile('/img/poza1.jpg', { root: __dirname })
});
app.get('/poza2.jpg', function (req, res) {
   res.sendFile('/img/poza2.jpg', { root: __dirname })
});
app.get('/poza3.jpg', function (req, res) {
   res.sendFile('/img/poza3.jpg', { root: __dirname })
});
app.get('/poza4.jpg', function (req, res) {
   res.sendFile('/img/poza4.jpg', { root: __dirname })
});
app.get('/poza5.jpg', function (req, res) {
   res.sendFile('/img/poza5.jpg', { root: __dirname })
});
app.get('/poza6.jpg', function (req, res) {
   res.sendFile('/img/poza6.jpg', { root: __dirname })
});
app.get('/poza7.jpg', function (req, res) {
   res.sendFile('/img/poza7.jpg', { root: __dirname })
});
app.get('/poza8.jpg', function (req, res) {
   res.sendFile('/img/poza8.jpg', { root: __dirname })
});
app.get('/poza9.jpg', function (req, res) {
   res.sendFile('/img/poza9.jpg', { root: __dirname })
});
app.get('/poza10.jpg', function (req, res) {
   res.sendFile('/img/poza10.jpg', { root: __dirname })
});
app.get('/poza11.jpg', function (req, res) {
   res.sendFile('/img/poza11.jpg', { root: __dirname })
});
app.get('/poza12.jpg', function (req, res) {
   res.sendFile('/img/poza12.jpg', { root: __dirname })
});
app.get('/poza13.jpg', function (req, res) {
   res.sendFile('/img/poza13.jpg', { root: __dirname })
});
app.get('/roata.png.png', function (req, res) {
   res.sendFile('/img/roata.png.png', { root: __dirname })
});
app.get('/about1.jpg', function (req, res) {
   res.sendFile('/img/about1.jpg', { root: __dirname })
});
app.get('/robot.jpg', function (req, res) {
   res.sendFile('/img/robot.jpg', { root: __dirname })
});
app.get('/sophia-alba.png', function (req, res) {
   res.sendFile('/img/sophia-alba.png', { root: __dirname })
});
app.get('/sophia-neagra.png', function (req, res) {
   res.sendFile('/img/sophia-neagra.png', { root: __dirname })
});
app.get('/sophia.png', function (req, res) {
   res.sendFile('/img/sophia.png', { root: __dirname })
});
app.get('/index_contact.js', function (req, res) {
   res.sendFile('/javascript/index_contact.js', { root: __dirname })
});
app.get('/animation.js', function (req, res) {
   res.sendFile('/javascript/animation.js', { root: __dirname })
});

app.get('/add_student', function (req, res) {
   res.render('inscrieri.ejs', { root: __dirname })
});


app.post('/add_student', function (req, res) {
   add_student({
      ...req.body,
      id: studentBD.nextId
   });
   res.render('inscrieri_menu.ejs', { root: __dirname });
});

app.get('/list_studenti', function (req, res) {
   res.render('studenti.ejs', { root: __dirname, BD: studentBD });
});
app.get('/contact.html', function (req, res) {
   res.render('contact.ejs', { root: __dirname, BD: commentBD });
});
app.get('/comentarii.ejs', function (req, res) {
   res.render('comentarii.ejs', { root: __dirname, BD: commentBD });
});
app.post('/contact.html', function (req, res) {
   add_comment({
      ...req.body,
      id: commentBD.nextId
   });
   res.render('contact.ejs', { root: __dirname, BD: commentBD});
});

app.post('/comentarii.ejs',function(req,res){
  
   delete_comment(req.body)
   res.render('comentarii.ejs', { root: __dirname, BD: commentBD });
});

app.get('/login', function (req, res) {
   res.render('login.ejs', { root: __dirname, BD: studentBD });
});
app.get('/MD5', function(req, res) {
   res.sendFile('MD5.js', {root: __dirname});
});

///optiune logout

app.post('/login', function(req, res) {
    //res.send(req.body);
    //console.log(req.body, userBD, userBD.length, userBD[0]);
   
   let cifru = crypto.createCipher('aes-128-cbc', 'HarleyDavidson');

   console.log(req.body.parola)

   let encrParola= cifru.update(req.body.parola, 'utf8', 'hex');

   encrParola+=cifru.final('hex');
   console.log(encrParola);
       
   userFound = {}
   for( let i = 0; i <userBD.length; i++){
       if(userBD[i].username === req.body.username && userBD[i].parola === encrParola){
           userFound = userBD[i];
       }
       if(userFound.username){
           req.session.username=userBD[i];//setez userul ca proprietate a sesiunii
       }
   }
    //req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000;
    res.render('profile.ejs',{user: req.session.username,BD: studentBD });
});

app.get('/profile', function(req, res) {
   console.log('profile', req.session.username);
   res.render('profile.ejs',{user: req.session.username});
});

 app.post('/logout', function(req, res) {
req.session.destroy();
 res.send();
 });

app.get('/something', function(req, res){
   res.send(req.session.username);
});



// In caz ca intrii pe o pagina care nu exista!
app.use(function (req, res) {
   // res.status(404).send({error: 'Not found'});
   res.status(404).render('404.ejs', { root: __dirname });
});

// Start the server
app.listen(port, () => {
   console.log(`Express.JS Server is running on http://localhost:${port}`)
});