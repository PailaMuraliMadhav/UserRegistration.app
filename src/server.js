import dotenv from 'dotenv';
dotenv.config(); // 👈 This must come before any usage of process.env

 import { connectDB } from './config/dbconnect.js';

import app from './app.js';

connectDB();

const PORT = process.env.PORT || 8888;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
