const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/send', (req, res) =>{
    
    let subject = req.body.subject;
    let text = req.body.text;
    let from = req.body.text;
    let to = req.body.to;

    res.json({message: 'Email is sending...'});
});








app.listen(port, ()=>{
    console.log(`Server is running on http://localhost:${port}`);
});
