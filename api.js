import express from 'express';

const app = express();
const PORT = 3000;      /**/


app.use(express.json())


app.get('/healph', (req, res) => {
        res.status(200).json({status: 'ok'})
});

app.listen(PORT, () => {
    console.log('App rodando!')

})

   

