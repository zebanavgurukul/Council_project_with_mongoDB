const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Council_Schema = new Schema ({
    Council_members_Work_in_Hindi : String,
    Council_members_Work_in_English : String,
    COUNCIL_POST : String
});

module.exports = mongoose.model('Council_Work', Council_Schema)