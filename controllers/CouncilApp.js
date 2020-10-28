const UserModel = require("../models/Council");
const CouncilModel = require("../models/Council_Work")

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

    get_COUNCIL_POST : (req,res) => {
        var regex = new RegExp(req.params.COUNCIL_POST,"i")
        // var list = []
        UserModel.find({COUNCIL_POST:regex})
        .then(Response => {
            var COUNCIL_START_DATE = Response[0]["COUNCIL_START_DATE"]
            if (COUNCIL_START_DATE == '3 month'){
                var minDate = new Date(); 
                minDate.setMonth(minDate.getMonth() + 3);
                console.log(minDate)
                console.log('should be changed council members');
                res.send("should be changed council members")
            }
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
    },

    createWork : (req, res) => {
        let Work = new CouncilModel ({
            Council_members_Work_in_Hindi : req.body.Council_members_Work_in_Hindi,
            Council_members_Work_in_English : req.body.Council_members_Work_in_English,
            COUNCIL_POST : req.body.COUNCIL_POST
        });
        Work.save()
            .then(result => {
                res.json({result});
            })
            .catch(err => {
                res.json({err});
            });
    },
    getWorksearch : (req,res) => {
        var regex = new RegExp(req.params.COUNCIL_POST,"i")
        CouncilModel.find({COUNCIL_POST:regex})
        .then(Response => {
            var data = {
                Council_members_Work_in_Hindi : Response[0]["Council_members_Work_in_Hindi"],
                Council_members_Work_in_English : Response[0]["Council_members_Work_in_English"],
                COUNCIL_POST : Response[0]["COUNCIL_POST"]
            }
            res.json({data});
        })
        .catch((err) => {
            res.json({err});
        })
    },
}