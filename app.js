const express=require('express');
const cors=require('cors');
const {pageNotFound}=require('./controllers/error');
const todoItemRoute=require('./routes/todoItemRouter');
const path=require('path');
require('dotenv').config();
const MONGO_URL=process.env.MONGO_URL;

mongoose=require('mongoose');

const app=express();

app.use(express.urlencoded());
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));



app.use('/api/todo',todoItemRoute);

app.use(pageNotFound);

const PORT=3000;


mongoose.connect(MONGO_URL).then(()=>{
    console.log('Connected to MongoDB ✅');
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT} 🚀`);
    });
}).catch((error)=>{
    console.error('Error connecting to MongoDB ❌',error);
});