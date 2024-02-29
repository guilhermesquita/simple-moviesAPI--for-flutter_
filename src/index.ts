import express, { Request, Response } from 'express';
import cors from 'cors'
import { movieRouter } from './routes/movie-routes';

const PORT = 3000;
const app = express()

app.use(cors())
app.use(express.json());
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

app.get('/ping', (_req: Request, res: Response) => {
    res.status(200).send('pong')
});

app.use('/v2', movieRouter)