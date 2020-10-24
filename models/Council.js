const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    STUDENT_NAME : String,
    COUNCIL_POST : String,
    COUNCIL_START_DATE : String
});

module.exports = mongoose.model('council_details', UserSchema)