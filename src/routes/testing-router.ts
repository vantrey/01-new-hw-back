import {Router} from 'express';
import {dropDatabase} from './videos/handlers';

export const testingRouter = Router({})

testingRouter.delete('/all-data', dropDatabase)