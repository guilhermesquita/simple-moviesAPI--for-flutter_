import { Request, Response } from "express";
import { DbMovie } from "../use-cases/db-movie";

export class MovieController {
    constructor(
        private readonly dbMovie: DbMovie     
    ){}

    public getMovie = async (req: Request, res: Response) => {
        try {
            const q = req.query.q as string;

            const output = await this.dbMovie.getMovie(q)

            res.status(200).send(output)

        } catch (error) {
            res.send(error)
            console.log(error)
        }
    }

    public createMovie = async (req: Request, res: Response) => {
        try {
            const movie = {
                title: req.body.title,
                year: req.body.year,
                description: req.body.description,
                director: req.body.director
            };

            const result = await this.dbMovie.addMovie(movie, res.statusCode);
            res.send(result)            

        }catch (error) {
            res.send(error)
            console.log(error)
        }
    }

}