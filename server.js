const express = require('express');
const app = express();
const port = 3000
const instatouch = require('instatouch');

//soonasolution


app.listen(port, (error)=>{
    if(error){console.log(error);}else{console.log('listening on port' + port)}
})

app.get('/',async (req,res)=>{
    const options = { count: 5, mediaType:['image','video'], download:false}
    let user =  await instatouch.user('', options)   
    res.send(user);
})

