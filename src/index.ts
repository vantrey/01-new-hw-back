import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import { videosRouter } from './routes/videos/videos-router';
import {testingRouter} from './routes/testing-router';

config();
export const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/videos', videosRouter);
app.use('/testing', testingRouter)

app.listen(port, () => {
	console.log(`IT-Incubator Video Api has been started at port: ${port}`);
});
