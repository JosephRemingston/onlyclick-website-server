import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mailsendRouter from './api/mailsend.ts';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/mailsend', mailsendRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});