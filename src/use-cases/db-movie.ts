import { MovieDatabase } from "../database/movie-database";
import { MovieDTO } from "../dtos/MovieDTO";

export class DbMovie {
    constructor(
        private movieDatabase: MovieDatabase
    ) { }

    public getMovie = async (q?: string) => {
        const movie = await this.movieDatabase.getMovie(q);
        return movie;
    }

    public addMovie = async (input: MovieDTO, status:number) => {

        await this.movieDatabase.addMovie(input);
        const output = {
            statusCode: status,
            message: 'Success'
        }

        return output;
    }
}