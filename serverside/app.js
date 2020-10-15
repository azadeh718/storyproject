const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Story=require("./models/Story");
const cors=require("cors");

mongoose.connect('mongodb://localhost:27017/StorySharing', {useNewUrlParser: true}).then(data=>{
    console.log("Database Connected");
});

app.use(cors())
;app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=process.env.PORT || 3000;


app.post("/saveStory",(req,res)=>{
    console.log(req.body.data);

    const story=new Story(req.body.data);
    story.save((err,data)=>{
        if(err) {res.json("Error Occuureed");}

        else{
            res.json("Data Saved");
        }
        

    })




})

app.listen(port,()=>{
    console.log(`Server Listening On Port${port}`);

})