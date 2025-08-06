import fakeVisitCache from './fakeVisitCache';

function teste5(req, res) {
    const name = req.query.name;
    if (!name) {
        res.status(400).send({ error: 'name parameter is required' });
    }

    if (!(name in fakeVisitCache)) {
        res.send('Usuário ' + name + ' foi lido 0 vezes.');
    }

    res.send('Usuário ' + name + ' foi lido ' + fakeVisitCache[name] + ' vezes');
}

export default teste5;
