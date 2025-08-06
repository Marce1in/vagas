import data from './fakeData.js'

export const getUser = (req, res) => {
    var name = req.query.name;

    for (let i = 0; i < data.length; i++) {
        if (i.name == name) {
            res.send(data[i]);
        }
    }
};

export const getUsers = (req, res) => {
    res.send(data);
};
