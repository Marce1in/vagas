import data from './fakeData.js';

function teste3(req, res) {
    const name = req.query.name;
    if (!name) {
        res.status(400).send({ error: 'name parameter is required' });
    }

    const userIndex = data.findIndex((user) => user.name === name);
    const deletedUser = data.splice(userIndex, 1)[0];

    if (!deletedUser) {
        res.status(404).send({ error: 'User not found' });
    }

    res.send({
        message: 'success',
        user: deletedUser,
    });
}

export default teste3;
