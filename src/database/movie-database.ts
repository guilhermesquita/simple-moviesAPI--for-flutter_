import { BaseDatabase } from "./baseDatabase";
import {MovieDTO} from '../dtos/MovieDTO';

export class MovieDatabase extends BaseDatabase{
    public static TABLE_MOVIES = "movies";

    public getMovie = async (q?: string) => {
        if(q){
            return await BaseDatabase.connection(MovieDatabase.TABLE_MOVIES).select().where({id: q})
        }
        return await BaseDatabase.connection(MovieDatabase.TABLE_MOVIES).select()
    }

    public addMovie = async (input: MovieDTO) =>{
        const insertDB = {
            title: input.title,
            director: input.director,
            description: input.description,
            year: input.year
        }
        await BaseDatabase.connection(MovieDatabase.TABLE_MOVIES).insert(insertDB);
    }
}