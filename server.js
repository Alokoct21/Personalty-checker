const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname,'public')));

const port  = process.env.PORT || 7000;



app.get('/',(req,res)=>{
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