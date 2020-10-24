const UserModel = require("../models/Council");

module.exports = {
    create : (req, res) => {
        let user = new UserModel ({
            STUDENT_NAME : req.body.STUDENT_NAME,
            COUNCIL_POST : req.body.COUNCIL_POST,
            COUNCIL_START_DATE : req.body.COUNCIL_START_DATE
        });
        user.save()
            .then(result => {
                res.json({ success: true, result : result });
            })
            .catch(err => {
                res.json({ success: false, result : err });
            });
    }
}