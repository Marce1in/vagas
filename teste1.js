import data from './fakeData.js';

export function getUser(req, res) {
    const name = req.query.name;
    if (!name) {
        res.status(400).send({ error: 'name parameter is required' });
    }

    const user = data.find((user) => user.name === name);

    if (!user) {
        res.status(404).send({ error: 'User not found' });
    }

    res.send(user);

    registerUserVisit(name)
}

export function getUsers(_, res) {
    res.send(data);
}
