const express = require('express');
const path = require('path');

const app = express();

const filepath = path.join(__dirname,'public'); 

app.use(express.static(filepath));

const port  = process.env.PORT || 7000;



app.get('/index.html',(req,res)=>{
   res.send(filepath) ;
   $(document).ready(function(){
        $('button').click(function(){
            const name = $('#nameid').val(); 
            $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
            
    
        });
    });
    
})






app.listen(port,()=>{
    console.log(`server is working http://localhost:${port}`);    
})