import { app } from './App';

const PORT = Number(process.env.SERVER_PORT as string);

app.start(PORT);