const express=require('express');
require('dotenv').config();
const numRoutes=require('./routes/numRoutes');

const PORT=9870;


const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const token = process.env.TOKEN;

const app=express();
app.use(express.json());
app.use('/numbers',numRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});
