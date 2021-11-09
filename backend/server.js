import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import programs from './data/Programs.js'

import programsRoutes from './routes/programs.js'
import cartRoutes from './routes/cart.js'
import orderRoutes from './routes/orders.js'
import messagesRoutes from './routes/messages.js'
import adminRoutes from './routes/admin.js'
import usersRouter from './routes/users.js';


const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/programs', programsRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);
app.use('/messages', messagesRoutes);
app.use('/admins', adminRoutes); 
app.use('/users', usersRouter);

const CONNECTION_URL = 'mongodb+srv://Katona_Zoltan:database@cluster0.xkea0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const port = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(port, () => {
        console.log(`Server running on: http://localhost:${port}`);
    }))
    .catch((error) =>console.log(error.message))
