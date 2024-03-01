import express from 'express'
import { MovieController } from '../controller/movie-controller';
import { DbMovie } from '../use-cases/db-movie';
import { MovieDatabase } from '../database/movie-database';

export const movieRouter = express.Router();

//Injenção de dependências
const movieBusiness = new DbMovie(
    new MovieDatabase()
)
const movieController = new MovieController(
    movieBusiness,
);

//Implementação das rotas
movieRouter.get('/movies', movieController.getMovie)
movieRouter.post('/movies', movieController.createMovie)