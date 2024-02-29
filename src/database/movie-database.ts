import { BaseDatabase } from "./baseDatabase";

export class MovieDatabase extends BaseDatabase{
    public static TABLE_MOVIES = "movies";

    public getMovie = async (q?: string) => {
        if(q){
            return await BaseDatabase.connection(MovieDatabase.TABLE_MOVIES).select().where({id: q})
        }
        return await BaseDatabase.connection(MovieDatabase.TABLE_MOVIES).select()
    }
}