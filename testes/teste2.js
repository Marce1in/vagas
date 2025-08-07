import data from '../storage/fakeData.js';
import { findLastUserId } from '../helpers.js';

function teste2(req, res) {
    const id = findLastUserId(data) + 1;
    const name = req.body.name;
    const job = req.body.job;

    if (!name || !job) {
        return res
            .status(400)
            .send({ error: 'Parâmetros "name" e "job" são obrigatórios' });
    }

    const newUser = {
        id: id,
        name: name,
        job: job,
    };

    data.push(newUser);
    return res.send(newUser);
}

export default teste2;
