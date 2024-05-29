const mongoose = require('mongoose');

const assignTeacher = new mongoose.Schema({
    DHL_405:{
        type: String,
    },
    CS_306:{
        type: String,
    },
    CS_308:{
        type: String,
    },
    CS_406:{
        type: String,
    },
    MATH_305:{
        type: String,
    },
    BBA_412:{
        type: String,
    },
    IS_401:{
        type: String,
    },
    IS_402:{
        type: String,
    },
    SE_408:{
        type: String,
    },
    SE_410:{
        type: String,
    },
    SE_412:{
        type: String,
    },
    STAT_402:{
        type: String,
    },
    MATH_513:{
        type: String,
    },
    SE_502:{
        type: String,
    },
    SE_504:{
        type: String,
    },
    SE_506:{
        type: String,
    },
    SE_510:{
        type: String,
    },
    SE_512:{
        type: String,
    },
    SE_514:{
        type: String,
    },
    BBA_510:{
        type: String,
    },
})
const Assign = mongoose.model('Assign', assignTeacher)
module.exports = Assign;