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
    },
    getID : (req,res) => {
        UserModel.findById({_id : req.params._id})
        .then(result => {
            res.json({ success : true, result : result});
        })
        .catch((err) => {
            res.json({ success : true, result : result});
        })
    },
    update : (req,res) => {
        UserModel.findByIdAndUpdate({_id : req.params._id},req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json({ success: false, result : err });
        });
    },
    delete : (req, res) =>{
        UserModel.findByIdAndRemove({_id : req.params._id})
        .then((result) => {
            res.json({ success : true, result : result})
        })
        .catch((err) => {
            res.json({ success : true, result : result});
        })
    }
}