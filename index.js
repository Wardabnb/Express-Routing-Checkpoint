import express from "express";
const app = express();
import bodyParser from "body-parser";
import { workingHoursMiddleware } from "./middleware/works_hours.js";
app.use(bodyParser.json());

// Servir les fichiers statiques depuis le répertoire 'views/css'
app.use('/css', express.static('./views/css'));
app.use('/images', express.static('./views/images'));

// Configurer Pug comme moteur de template
app.set('view engine', 'pug');
app.set('views', './views');

// Routes
app.get('/', workingHoursMiddleware,(req, res) => {
  res.render('home');
});

app.get('/contact', workingHoursMiddleware,(req, res) => {
  res.render('contact');
});

app.get('/service', workingHoursMiddleware,(req, res) => {
  res.render('our_Service',{item1: {      span: "STRENGTH",      h1: " TRAINING",      p: "Bodybuilding is a discipline aimed at developing and maintaining muscle mass through physical exercises.",      button: "Read More"    }, 
       item2: {      span: "CARDIO",      h1: " TRAINING",      p: "Bodybuilding is a discipline aimed at developing and maintaining muscle mass through physical exercises.",      button: "Read More"    }  ,
      item3:{
        span:"CROSS ",h1:"TRAINING",p:"Cross Training, meaning 'crossed training,' is therefore a method of physical conditioning that combines different disciplines.",button:"Read More"
      },
      item4:{
        span:"CROSS ",h1:"TRAINING",p:"Cross Training, meaning 'crossed training,' is therefore a method of physical conditioning that combines different disciplines.",button:"Read More"
      },}
    )});


// Démarrer le serveur
app.listen(4000, () => {
  console.log("server is running");
});
