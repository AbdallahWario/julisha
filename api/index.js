const express = require('express')
const cors = require('cors')
const app=express()
const User = require('./models/User')
const mongoose = require('mongoose');
const Post = require('./models/Post');
const multer = require('multer');
const fs = require('fs');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv')
// import Post from 'models/Post';
// import User from 'models/user';
dotenv.config()

const uploadMiddleware = multer({ dest: 'uploads/' });

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(cookieParser());

// Allow requests from any origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



// app.use(cors({credentials:true,origin:'https://blogsite-rosy.vercel.app'}));

app.use(cors());


app.use(express.json())
mongoose.connect('mongodb+srv://wario:2PifGoDdOdpztEar@cluster0.6h7pzbf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
});

app.post('/register', async(req,res)=>{
    const{username,email,password}=req.body;
    
      try{
        const userDoc = await User.create({
          username,
          email,
          password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
      } catch(e) {
        console.log(e);
        res.status(400).json(e);
      }
    });   

    app.post('/login', async (req,res) => {
      const {username,password} = req.body;
      const userDoc = await User.findOne({username});
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (passOk) {
        // logged in
        jwt.sign({username,id:userDoc._id}, secret, {}, (err,token) => {
          if (err) throw err;
          res.cookie('token', token).json({
            id:userDoc._id,
            username,
          });
        });
      } else {
        res.status(400).json('wrong credentials');
      }
    });
    
    app.get('/profile', (req,res) => {
      const {token} = req.cookies;
      jwt.verify(token, secret, {}, (err,info) => {
        if (err) throw err;
        res.json(info);  
      });
    });

    app.post('/logout', (req,res) => {
      res.cookie('token', '').json('ok');
    });
  


    app.post('/createPost', uploadMiddleware.single('file'), async (req,res) => {
      const {originalname,path} = req.file;
      const parts = originalname.split('.');
      const ext = parts[parts.length - 1];
      const newPath = path+'.'+ext;
      fs.renameSync(path, newPath);
    
      const {token} = req.cookies;
      jwt.verify(token, secret, {}, async (err,info) => {
        if (err) throw err;
        const {title,summary,content} = req.body;
        const postDoc = await Post.create({
          title,
          summary,
          content,
          cover:newPath,
          author:info.id,
        });
        res.json(postDoc);
      });
    
    });

    app.put('/post',uploadMiddleware.single('file'), async (req,res) => {
      let newPath = null;
      if (req.file) {
        const {originalname,path} = req.file;
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        newPath = path+'.'+ext;
        fs.renameSync(path, newPath);
      }
    
      const {token} = req.cookies;
      jwt.verify(token, secret, {}, async (err,info) => {
        if (err) throw err;
        const {id,title,summary,content} = req.body;
        const postDoc = await Post.findOne({ _id: id, author: info.id }).exec();
        if (!postDoc) {
          return res.status(400).json('you are not the author or the post does not exist');
        }
        postDoc.title = title;
        postDoc.summary = summary;
        postDoc.content = content;
        if (newPath) {
          postDoc.cover = newPath;
        }
        const updatedPostDoc = await postDoc.save();
        res.json(updatedPostDoc);
      });
    });
    
    

app.get("/", (req, res) => {
  res.send("This server is Connected !");
});

app.get('/post', async (req,res) => {
  res.json(
    await Post.find()
      .populate('author', ['username'])
      .sort({createdAt: -1})
      .limit(20)
  );
});

app.get('/post/:id', async (req, res) => {
  const {id} = req.params;
  const postDoc = await Post.findById(id).populate('author', ['username']);
  res.json(postDoc);
})

if(process.env.API_PORT){
  app.listen(process.env.API_PORT,() => {
    console.log(`Server  is running on PORT ${process.env.API_PORT}`);
  })
}

 module.exports = app;