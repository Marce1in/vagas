import data from './fakeData.js'

function teste3 (req, res) {
    var name = req.query.name;

    for (let i = 0; i < data.length; i++) {
        if (i.name == name) {
            data[i] = null;
        }
    }

    res.send('success');
};

export default teste3
