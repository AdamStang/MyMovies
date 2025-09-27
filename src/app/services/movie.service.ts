import { Injectable } from "@angular/core";
import { Movie } from "../models/movie.model";
import { Genres } from "../enums/genres.enum";
import { SortMovie } from "../enums/sortMovie.enum";
import { Actor } from "../models/actor.model";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private movies: Movie[] = [
        {
            id: 1,
            title: "Ak sa nahnevame budeme zli",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920489_jvzc8a.png",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            rating: 9,
            year: 1974,
            favourite: true
        },
        {
            id: 2,
            title: "Superpolicajti z Miami",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/000/076/76751_34145b.jpg",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1985,
            rating: 8.4,
            favourite: true
        },
        {
            id: 3,
            title: "Maly unaveny Joe",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920314_qd7bie.png",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1971,
            rating: 8.2,
            favourite: true
        }, 
        {
            id: 4,
            title: "Kto najde priatela najde poklad",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920500_g95gz3.png",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1981,
            rating: 8.8,
            favourite: true
        }, 
        {
            id: 5,
            title: "Buddy mieri na zapad",
            imageUrl: "http://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920307_i2b1zb.png",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1981,
            rating: 8.7,
            favourite: true
        },
        {
            id: 6,
            title: "Dobrodruh",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/160/979/160979672_195e92.jpg",
            actorIds: [2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1987,
            rating: 8.6,
            favourite: true
        }, 
        {
            id: 7,
            title: "Prava a lava ruka diabla",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920298_23ox1w.png",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1970,
            rating: 8.0,
            favourite: true
        },
        {
            id: 8,
            title: "Pomsta cierneho korzara",
            imageUrl: "https://www.niagara.sk/images/products/big/pomsta-cierneho-korzara.jpg",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1970,
            rating: 7.8,
            favourite: true
        },
        {
            id: 9,
            title: "Dvaja machri medzi nebom a peklom",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920493_esu85f.png",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1972,
            rating: 7.5,
            favourite: true
        }, 
        {
            id: 10,
            title: "Policajt drabom",
            imageUrl: "https://filmnadvd.b-cdn.net/PICTURES/policajt-drabem-dvd.jpg",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1973,
            rating: 7.8,
            favourite: true
        },
        {
            id: 11,
            title: "Dvaja misionari",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/188/169188514_73tryc.jpg",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1974,
            rating: 7.9,
            favourite: true
        },
        {
            id: 12,
            title: "Policajt v Hongkongu",
            imageUrl: "http://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/160/616/160616338_c7f38a.jpg",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1975,
            rating: 7.8,
            favourite: true
        },
        {
            id: 13,
            title: "Dvaja Policajti",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/000/020/20961_e3cf9f.jpg",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1977,
            rating: 8.3,
            favourite: true
        },
        {
            id: 14,
            title: "Policajt v Afrike",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/013/158013080_c3c8c8.jpg",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1978,
            rating: 7.8,
            favourite: true
        },
        {
            id: 15,
            title: "Buldozer",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920556_d1iu30.png",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1978,
            rating: 7.4,
            favourite: true
        },
        {
            id: 16,
            title: "Parna a neparna",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920502_bdcwhj.png",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1978,
            rating: 8,
            favourite: true
        },
        {
            id: 17,
            title: "Hrochy v afrike",
            imageUrl: "https://www.niagara.sk/images/products/big/hrochy-v-afrike.jpg",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1979,
            rating: 8,
            favourite: true
        },
        {
            id: 18,
            title: "Milionovy chrobak",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/158/406/158406133_f10632.jpg",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1980,
            rating: 7.8,
            favourite: true
        },
        {
            id: 19,
            title: "Bananovy joe",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920490_022dho.png",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1982,
            rating: 7.9,
            favourite: true
        },
        {
            id: 20,
            title: "Bomber",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920491_qarlb6.png",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1982,
            rating: 7.6,
            favourite: true
        },
        {
            id: 21,
            title: "Dvojnici",
            imageUrl: "https://www.moviemania.sk/img/film/n/non-ce-due-senza-quattro.jpg",
            actorIds: [1],
            genres: [Genres.Comedy, Genres.Action],
            year: 1984,
            rating: 7.9,
            favourite: true
        }, 
        {
            id: 22,
            title: "Superpolicajt",
            imageUrl: "https://www.niagara.sk/images/products/big/superpolicajt.jpg",
            actorIds: [2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1980,
            rating: 8.8,
            favourite: true
        },
        {
            id: 23,
            title: "Chod na to",
            imageUrl: "https://image.pmgstatic.com/cache/resized/w420/files/images/film/posters/169/920/169920492_reh0x3.png",
            actorIds: [1, 2],
            genres: [Genres.Comedy, Genres.Action],
            year: 1983,
            rating: 8.1,
            favourite: true
        }
    ];

    getMovies(search: string, favoriteOnly: boolean, genres: string[], actors: Actor[], sort: SortMovie): Movie[] {
        const movies =  this.movies.filter(movie => {
            const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
            const matchesFavorite = !favoriteOnly || movie.favourite === true;
            const matchesGenres = !genres?.length || 
                movie.genres?.some(g => genres.includes(g));
            const matchesActors = !actors?.length || 
                movie.actorIds.some(a => actors.map(x => x.id).includes(a));

            return matchesSearch && matchesFavorite && matchesGenres && matchesActors;
        });

        switch (sort) {
            case SortMovie.Rating:  
                return movies.sort((a, b) => b.rating - a.rating);
            case SortMovie.Year:
                return movies.sort((a, b) => b.year - a.year);
            case SortMovie.Name:
                return movies.sort((a, b) => a.title.localeCompare(b.title));
            default: 
                return movies;
        }
    }
}