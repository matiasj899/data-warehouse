const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const regionSchema= new mongoose.Schema({
    nombre:{type:String,required:true},
    paises:[{ type: Schema.Types.ObjectId, ref: 'Pais' }]
    
})

module.exports=mongoose.model("Region", regionSchema)