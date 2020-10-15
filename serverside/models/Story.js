const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const StorySchema=new Schema({
    storyName:String,
    uploadedBy:String,
    uploadedDate:{type:String},
    story:String





})

module.exports=mongoose.model("story",StorySchema);

