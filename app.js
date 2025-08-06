import express from 'express';
import * as teste1 from './teste1.js';
import teste2 from './teste2.js';
import teste3 from './teste3.js';
import teste4 from './teste4.js';
import teste5 from './teste5.js';

const app = express()

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get('/user', teste1.getUser);
app.get('/users', teste1.getUsers);
app.post('/users', teste2);
app.delete('/users', teste3);
app.put('/users', teste4);
app.get('/users/access', teste5);

const port = 3000;
app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});
