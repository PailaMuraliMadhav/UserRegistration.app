import express from "express";



const app= express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use('/api/v1/todos',todoRoutes);

app.get('/', (req, res) => {
  res.send('🚀 Backend is running!');
});

//routes import 
import userRoute from "./routes/UserRoutes.js";


//routes declare

app.use("/api/v1/register", userRoute);

export default app;