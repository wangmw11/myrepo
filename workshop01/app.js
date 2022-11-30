import express from 'express';
import path from "path"
import { engine } from 'express-handlebars';

const app = express();

const PORT = process.env.PORT || 3000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static("images"));

function randomText(){
  var dynText = ['Logic will get you from A to B. Imagination will take you everywhere.','There are 10 kinds of people. Those who know binary and those who don\'t.','There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies and the other is to make it so complicated that there are no obvious deficiencies.','It\'s not that I\'m so smart, it\'s just that I stay with problems longer.','It is pitch dark. You are likely to be eaten by a grue.'];
  var sInput = {};
  sInput.text = dynText[Math.floor(Math.random() * dynText.length)];
  return sInput;
}

app.get('/', (req, res) => {
    res.render('home',randomText());
});

app.listen(PORT, () => console.log(`Server started running on PORT ${PORT}`));

