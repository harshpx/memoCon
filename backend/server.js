import express from 'express';
import 'dotenv/config';
import colors from 'colors';
import connectDB from './utils/db.js';
import errorHandler from './middlewares/errorMiddleware.js';
import noteRoutes from './routes/noteRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/notes',noteRoutes);
app.use('/api/users',userRoutes);

app.use(errorHandler);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port: ${process.env.PORT}`);
})