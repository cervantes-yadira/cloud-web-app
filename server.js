import express from 'express';

const app = express();
const PORT = 5876;

app.use(express.static('./public'));

app.listen(PORT, console.log(`Server started on port ${PORT} at http://localhost:${PORT}`));