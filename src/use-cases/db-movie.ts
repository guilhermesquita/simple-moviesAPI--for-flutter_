import { MovieDatabase } from "../database/movie-database";

export class DbMovie{
    constructor(
        private movieDatabase: MovieDatabase
    ){}

    public getMovie = async (q?: string)=>{
        const movie = await this.movieDatabase.getMovie(q);
        return movie;
    }
}