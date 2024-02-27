require('dotenv').config();
const express = require('express');
const workoutRoutes = require('./routes/workouts');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');

//express
const app = express();

//middleware
app.use(express.json());

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
});


//routes
app.use('/api/workouts',workoutRoutes); //grab all woroutotes and use it in app
app.use('/api/user', userRoutes);

mongoose.connect(process.env.MONG_URI).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('connected to DB & Listening on port', process.env.PORT)
    })
}).catch((error)=>{
    console.log(error)
})




