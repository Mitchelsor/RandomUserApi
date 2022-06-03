const express = require('express')
const { dbConnection } = require('./database/config')
const cors = require('cors');
const app = express()

dbConnection();

app.use(cors());
app.use(express.json());

//Rutas 
app.use('/api/favoritos', require('./routes/listados'))


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})