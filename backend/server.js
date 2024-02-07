import express from 'express';
import 'dotenv/config';
import colors from 'colors';
import connectDB from './utils/db.js';
import errorHandler from './middlewares/errorMiddleware.js';
import noteRoutes from './routes/noteRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();

connectDB();

// app.use(cors(
//     {
//         origin: ["https://deploy-mern-frontend.vercel.app"],
//         methods: ["POST", "GET", "PUT", "DELETE"],
//         credentials: true
//     }
// ));

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/api/notes',noteRoutes);
app.use('/api/users',userRoutes);

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
})