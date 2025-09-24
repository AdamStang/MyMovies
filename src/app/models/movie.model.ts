import { Genres } from "../enums/genres.enum";

export interface Movie {
    id: number;
    title: string;
    imageUrl: string;
    actorIds: number[];
    genres?: Genres[];
    year: number;
    rating: number;
    favourite: boolean;
}