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
}