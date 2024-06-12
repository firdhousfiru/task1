const mongoose=require("mongoose")
const schema = mongoose.Schema(
    {
        "name":String,
        "con":String,
        "ufor":String,
        "edate":String
    }
)
const pharmacymodel=mongoose.model("pharmacy",schema)
module.exports={pharmacymodel}