import data from './fakeData.js';

function teste4(req, res) {
    if (!req.permissions.canEdit){
        res.status(403).send({error: 'no permission'})
    }

    const id = req.query.id;
    const name = req.body.name;
    const job = req.body.job;

    if (!id || !name || !job) {
        res.status(400).send({
            error: 'id, name and job parameters are required',
        });
    }

    const user = data.find((user) => user.id == id);

    user = {
        id: id,
        name: name,
        job: job,
    };

    res.send(user);
}

export default teste4;
