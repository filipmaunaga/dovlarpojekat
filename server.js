const express=require("express");
const app=express();
app.get("/", function (req,res){
  res.send("<h1>Hello world! </h1>");
  console.log(req);
});
app.listen(3000,function (){
  console.log("Server is now running on port 3000");
})
