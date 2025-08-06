import data from "./fakeData.js"

function teste4 (req, res) {
    var id = req.query.id;

    const reg = data.find((d) => id == id);
    reg.name = req.body.name;
    reg.job = req.body.job;

    res.send(reg);
};

export default teste4
