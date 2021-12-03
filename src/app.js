const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

const mainRouter = require('./routes/mainRouter');

app.use('/', mainRouter);


app.listen(3000, () => {
    console.log('Servidor funcionando en el puerto 3000 🤓👌');
})

