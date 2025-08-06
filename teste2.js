import data from './fakeData.js';
import { findLastUserId } from './helpers.js';

function teste2(req, res) {
    const id = findLastUserId(data) + 1
    const name = req.body.name;
    const job = req.body.job;

    if (!name || !job){
        res.status(400).send({ error: 'name and job parameters are required' });
    }

    const newUser = {
        id: id,
        name: name,
        job: job,
    };

    data.push(newUser);
    res.send(newUser);
}

export default teste2;
