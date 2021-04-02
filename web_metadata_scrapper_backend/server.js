
const express = require("express"); 
const app = express(); 

const {PythonShell} =require('python-shell'); 
  
app.get("/scrapper", (req, res, next)=>{ 
    //Here are the option object in which arguments can be passed for the python_test.js. 

    let options = { 
        mode: 'text', 
        pythonOptions: ['-u'], 
        args: [req.query.link] 
    }; 
  
    PythonShell.run('scrapper.py', options, function (err, result){ 
          if (err)  console.log('Err :',err)
          // result is an array consisting of messages collected  
          //during execution of script. 
          console.log('result: ', result);
          res.send(result) 
    }); 
}); 
  
const PORT = process.env.PORT || 8080; 
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));