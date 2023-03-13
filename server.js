const express = require('express');
const app = express();
const port = 3000
const instatouch = require('instatouch');


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.listen(port, (error)=>{
    if(error){console.log(error);}else{console.log('listening on port' + port)}
})

app.get('/insta/:client/:count',async (req,res)=>{
    const client = req.params.client;
    const count = req.params.count;
    const options = { count: `${count}`, mediaType:['image','video'], download:false}
   try {
    let user =  await instatouch.user(`${client}`, options)   
    res.send(user);
    
   } catch (error) {
     res.json(`Error: ${error.message}`);
   }
})

