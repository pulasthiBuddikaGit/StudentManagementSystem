const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const studentSchema =  new Schema({

    name : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    gender : {
        type:String,
        required : true
    }

})
                            //table name eka tma me "Student" kiyala dila tyenne
const Student = mongoose.model("Student",studentSchema)

module.exports = Student;
