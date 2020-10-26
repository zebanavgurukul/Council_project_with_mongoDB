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
                res.json({result});
            })
            .catch(err => {
                res.json({err});
            });
    },

    getID : (req,res) => {
        UserModel.findById({_id : req.params._id})
        .then(result => {
            res.json({result});
        })
        .catch((err) => {
            res.json({result});
        })
    },

    getsearch : (req,res) => {
        var regex = new RegExp(req.params.STUDENT_NAME,"i")
        var list = []
        UserModel.find({STUDENT_NAME:regex})
        .then(Response => {
            for (var i = 0; i < Response.length; i++){
                var data = {
                    STUDENT_NAME : Response[i]["STUDENT_NAME"],
                    COUNCIL_POST : Response[i]["COUNCIL_POST"],
                    COUNCIL_START_DATE : Response[i]["COUNCIL_START_DATE"]
                }
                list.push(data)
            }
            res.json({list});
        })
        .catch((err) => {
            res.json({err});
        })
    },

    update : (req,res) => {
        UserModel.findByIdAndUpdate({_id : req.params._id},req.body)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.json({err});
        });
    },

    delete : (req, res) =>{
        UserModel.findByIdAndRemove({_id : req.params._id})
        .then((result) => {
            res.json({result})
        })
        .catch((err) => {
            res.json({result});
        })
    }
}