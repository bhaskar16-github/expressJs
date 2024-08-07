const express= require("express");
const app= express();  //instalisation
app.use(express.json()); //json can format data transfer
const port =8081;
const toDoList=["Bhaskar","Magapu"];
app.get("/todos",(req,res)=>{
    res.status(200).send(toDoList);
});
app.post("/todos",(req,res)=>{
    let newToDoItem= req.body.item
    toDoList.push(newToDoItem);
    res.status(201).send({
        message: "The todo got added sucessfully"
    });
});
app.delete("/todos",(req,res)=>{
    const itemToDelete= req.body.item
    toDoList.find((element,index)=>{
        if(element=== itemToDelete){
            toDoList.splice(index,1);
        }
    });
     res.status(202).send({
        message: `Deleted item ${req.body.item}`
});
});
app.all("/todos",(req,res)=>{
    res.status(501).send();
});
app.all("*",(req,res)=>{
    res.status(404).send();
});

app.listen(port,()=>{
    console.log (`Express Js${port}`);
});



