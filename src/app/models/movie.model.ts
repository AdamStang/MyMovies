import { Genres } from "../enums/genres.enum";

export interface Movie {
    id: number;
    title: string;
    description?: string;
    imageUrl: string;
    trailerUrl?: string;
    movieYTUrl?: string;
    actorIds: number[];
    genres?: Genres[];
    year: number;
    rating: number;
    imdbRating?: number;
    csfdRating?: number;
    favourite: boolean;
}