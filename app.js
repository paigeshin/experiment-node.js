//module & setting
const
    express = require('express'),
    app = express();

//router
const
    wzRecorderRouter = require('./routes/wzrecorder/wzrecorder');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use('/wzRecorder', wzRecorderRouter);

app.get('/', (req, res) => {
   res.send('Hello World');
});

app.listen(port);
console.log(`Server is running on ${port}`);