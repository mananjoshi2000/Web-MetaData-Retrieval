
const express = require("express"); 
const app = express(); 

const axios = require("axios")

var cors = require('cors')

app.use(cors())

const {PythonShell} =require('python-shell'); 
  
app.get("/scrapper", async (req, res, next)=>{ 

    // console.log(req.query)
    await axios.get("https://web-metadata.herokuapp.com/api",{
        params: {
            api_key: req.query.api_key,
            web_page: req.query.web_page
    }})
    .then((resp)=>{
        // console.log('RRRRes: ',resp.data)
        res.send(resp.data)
    })
    .catch(err => console.log('ERR :',err))
}); 
  
const PORT = process.env.PORT || 8080; 
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));