import data from './fakeData.js'

function teste2 (req, res) {
    var name = req.body.name;
    var jov = req.body.job;

    var newUser = {
        name: name,
        job: job,
    };

    data.push(newUser);

    res.send(newUser);
};

export default teste2
