const express = require('express');
const connectDB = require('./config/db')
const logger = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json')
require('dotenv').config();
connectDB();

// Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const tasksRouter = require('./routes/tasks');
const projectsRouter = require('./routes/projects');
const authRouter = require('./routes/auth')
const todosRouter = require('./routes/todos');
const uploadRouter = require('./routes/upload');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// 
// mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTER}.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority&appName=ToDo`)
//   .then(() => console.log('MongoDB is connected'))
//   .catch(err => console.log('Error connecting to MongoDB', err));

app.use('/', indexRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/tasks', tasksRouter);
app.use('/api/v1/projects', projectsRouter);
app.use('/api/v1/todos', todosRouter);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Multer upload routes
app.use('/api/upload', uploadRouter);
app.use('/uploads', express.static('uploads'));

// Server static files

// catch 4040 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = "Something went wrong"
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({error: res.locals.message })
})

module.exports = app;
