function teste5 (req, res) {
    var name = req.query.name;

    res.send('Usuário ' + name + '  foi lido 0 vezes.');
};

export default teste5
