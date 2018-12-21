var exp=require('express');
var app=exp();
var path=require('path');
var mongoose=require('mongoose');
var mongo=require('mongodb').MongoClient;
var bodyparser=require('body-parser');
app.use(bodyparser.json());
var dbo;
mongo.connect('mongodb://samuelpaul:samuelpaul123@ds033187.mlab.com:33187/samuel',(err,db)=>{
    if(err) throw err;
    dbo=db.db('samuel');
})
app.use(exp.static(path.join(__dirname,'dist/CRUDoperations')));

app.post('/postingfromServices',(req,res)=>{
    dbo.collection('postDataFromTask').insertOne(req.body,(err,result)=>{
        if(err) throw err;
        //  console.log(result);
    })
})
app.get('/gettingData',(req,res)=>{
    dbo.collection('postDataFromTask').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

app.put('/sasa',(req,res)=>{
    var id=new mongoose.Types.ObjectId(req.body._id);
    dbo.collection('postDataFromTask').update({_id:id},{name:req.body.name,age:req.body.age,roll:req.body.roll},(err,data)=>{
        if(err) throw err;
        res.send(data);
    })
})


        app.delete('/delete/:id', (req,res)=>{
            console.log(req.params.id);
            var id=new mongoose.Types.ObjectId(req.params.id);
    
            dbo.collection('postDataFromTask').deleteOne({_id:id},(err,result)=>{
               
                if(err) throw err;
                console.log(result);
                res.send(result);
            })
        })


















app.listen(4004,(err,res)=>{
    if(err) throw err;
    console.log('server is responding');
})