import express from 'express';
import * as teste1 from './teste1.js';
import teste2 from './teste2.js';
import teste3 from './teste3.js';
import teste4 from './teste4.js';
import teste5 from './teste5.js';
import * as teste6 from './teste6.js'

const app = express();

app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  post login/ </br>
  `);
});

app.get('/user', teste1.getUser);
app.get('/users', teste1.getUsers);
app.post('/users', teste2);
app.delete('/users', teste6.authMiddleware, teste3);
app.put('/users', teste6.authMiddleware, teste4);
app.get('/users/access', teste5);
app.post('/login', teste6.login);

const port = 3000;
app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});
