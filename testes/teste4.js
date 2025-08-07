import data from '../storage/fakeData.js';

function teste4(req, res) {
    if (!req.permissions.canEdit) {
        return res.status(403).send({ error: 'Sem permissão' });
    }

    const id = Number(req.query.id);
    const name = req.body.name;
    const job = req.body.job;

    if (isNaN(id) || !name || !job) {
        return res.status(400).send({
            error: `Parâmetros id, name e job são obrigatórios`,
        });
    }

    const user = data.find((user) => user.id == id);

    user.id = id;
    user.name = name;
    user.job = job;

    return res.send(user);
}

export default teste4;
