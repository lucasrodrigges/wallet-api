import { app } from './App';
import {config} from 'dotenv';

config();

const PORT = process.env.SERVER_PORT as string;

app.start(PORT);