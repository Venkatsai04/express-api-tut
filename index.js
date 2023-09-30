const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.post('/getlength', (req,res)=>{
    const name = req.body.name;
    const length = name.length

    if(name){
        res.send({name : name, length:length})
    }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
