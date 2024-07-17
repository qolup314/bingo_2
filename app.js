var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//multerの設定
const multer=require('multer');  
const upload=multer({ dest: 'uploads/'}); 


var main = require('./routes/main');
var start_1=require('./routes/start_1');
var start_2=require('./routes/start_2');
var basic_info=require('./routes/basic_info');
var future_time_1=require('./routes/future_time_1');
//var future_time_2=require('./routes/future_time_2');
var IT_literacy=require('./routes/IT_literacy');
var my_number_1=require('./routes/my_number_1');
var bingo=require('./routes/bingo');
var my_number_2=require('./routes/my_number_2');
var final_page=require('./routes/final_page')
var end=require('./routes/end')


var bingo_game=require('./routes/bingo_game');
var target_page_1_1=require('./routes/target_page_1_1');
var target_page_1_2=require('./routes/target_page_1_2');
var target_page_1_3=require('./routes/target_page_1_3');
var target_page_1_4=require('./routes/target_page_1_4');
var target_page_1_5=require('./routes/target_page_1_5');
var target_page_1_6=require('./routes/target_page_1_6');
var target_page_1_7=require('./routes/target_page_1_7');
var target_page_1_8=require('./routes/target_page_1_8');
var target_page_1_9=require('./routes/target_page_1_9');
var target_page_1_10=require('./routes/target_page_1_10');
var target_page_1_11=require('./routes/target_page_1_11');
var target_page_1_12=require('./routes/target_page_1_12');
var target_page_1_13=require('./routes/target_page_1_13');
var target_page_1_14=require('./routes/target_page_1_14');
var target_page_1_15=require('./routes/target_page_1_15');
var target_page_1_16=require('./routes/target_page_1_16');
var target_page_1_17=require('./routes/target_page_1_17');
var target_page_1_18=require('./routes/target_page_1_18');
var target_page_1_19=require('./routes/target_page_1_19');
var target_page_1_20=require('./routes/target_page_1_20');
var target_page_1_21=require('./routes/target_page_1_21');
var target_page_1_22=require('./routes/target_page_1_22');
var target_page_1_23=require('./routes/target_page_1_23');
var target_page_1_24=require('./routes/target_page_1_24');
var target_page_1_25=require('./routes/target_page_1_25');

var usersRouter = require('./routes/users');

var app = express();

//
const port=3000; 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', main);
app.use('/start_1', start_1);
app.use('/start_2', start_2);
app.use('/basic_info', basic_info);
app.use('/future_time_1', future_time_1);
//app.use('/future_time_2', future_time_2);
app.use('/IT_literacy', IT_literacy);
app.use('/my_number_1', my_number_1);
app.use('/bingo', bingo);
app.use('/my_number_2', my_number_2);
app.use('/final_page', final_page)
app.use('/end', end)

app.use('/bingo_game', bingo_game);
app.use('/target_page_1_1', target_page_1_1);
app.use('/target_page_1_2', target_page_1_2);
app.use('/target_page_1_3', target_page_1_3);
app.use('/target_page_1_4', target_page_1_4);
app.use('/target_page_1_5', target_page_1_5);
app.use('/target_page_1_6', target_page_1_6);
app.use('/target_page_1_7', target_page_1_7);
app.use('/target_page_1_8', target_page_1_8);
app.use('/target_page_1_9', target_page_1_9);
app.use('/target_page_1_10', target_page_1_10);
app.use('/target_page_1_11', target_page_1_11);
app.use('/target_page_1_12', target_page_1_12);
app.use('/target_page_1_13', target_page_1_13);
app.use('/target_page_1_14', target_page_1_14);
app.use('/target_page_1_15', target_page_1_15);
app.use('/target_page_1_16', target_page_1_16);
app.use('/target_page_1_17', target_page_1_17);
app.use('/target_page_1_18', target_page_1_18);
app.use('/target_page_1_19', target_page_1_19);
app.use('/target_page_1_20', target_page_1_20);
app.use('/target_page_1_21', target_page_1_21);
app.use('/target_page_1_22', target_page_1_22);
app.use('/target_page_1_23', target_page_1_23);
app.use('/target_page_1_24', target_page_1_24);
app.use('/target_page_1_25', target_page_1_25);

app.use('/users', usersRouter);

//ファイルのアップロード画面が"localhost:3000/upload"で直接表示できるようになる。
app.get('/upload', (req, res) => res.sendFile(path.join(__dirname, 'public/upload.html')));

//アップロードしたファイルの保存
app.post('/upload', upload.single('file'), function(req, res){
  res.send(req.file.originalname+'<h1 style=" margin:10% 20%; padding:5% ; background-color:#d4dcda;text-align:center;">データの送付が完了しました。<br>これですべて終了です。<br>ありがとうございました。</h1>');
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
