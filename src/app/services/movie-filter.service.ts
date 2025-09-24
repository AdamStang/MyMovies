import { Injectable, signal } from '@angular/core';
import { Genres } from '../enums/genres.enum';
import { Actor } from '../models/actor.model';
import { SortMovie } from '../enums/sortMovie.enum';

export interface MovieFilters {
  favoriteOnly: boolean;
  genres: Genres[];
  actors: Actor[];
}

@Injectable({
  providedIn: 'root'
})
export class MovieFilterService {
  search = signal<string>('');
  filters = signal<MovieFilters>({
    favoriteOnly: false,
    genres: [],
    actors: []
  });
  sort = signal<SortMovie>(SortMovie.Name);

  setSearch(value: string) {
    this.search.set(value);
  }

  toggleFavorite(value: boolean) {
    this.filters.update(f => ({ ...f, favorite: value }));
  }

  setGenres(genres: Genres[]) {
    this.filters.update(f => ({ ...f, genres }));
  }

  setActors(actors: Actor[]) {
    this.filters.update(f => ({ ...f, actors }));
  }

  setFilters(filters: MovieFilters) {
    this.filters.set(filters);
  }

  setSort(sort: SortMovie) {
    this.sort.set(sort);
  }
}
