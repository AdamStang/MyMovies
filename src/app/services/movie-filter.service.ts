import { Injectable, signal } from '@angular/core';
import { Genres } from '../enums/genres.enum';
import { Actor } from '../models/actor.model';
import { SortMovie } from '../enums/sortMovie.enum';

@Injectable({
  providedIn: 'root'
})
export class MovieFilterService {
  search = signal<string>('');
  favoriteOnly = signal<boolean>(false);
  genres = signal<Genres[]>([]);
  actors = signal<Actor[]>([]);
  sort = signal<SortMovie>(SortMovie.Name);

  setSearch(value: string) {
    this.search.set(value);
  }

  toggleFavorite() {
    const current = this.favoriteOnly();
    this.favoriteOnly.set(!current);
  }

  toggleActor(actor: Actor) {
    const current = this.actors();
    this.actors.set(
      current.includes(actor)
        ? current.filter(a => a !== actor)
        : [...current, actor]
    );
  }

  toggleGenre(genre: Genres) {
    const current = this.genres();
    this.genres.set(
      current.includes(genre)
        ? current.filter(g => g !== genre)
        : [...current, genre]
    );
  }

  setSort(sort: SortMovie) {
    this.sort.set(sort);
  }
}
