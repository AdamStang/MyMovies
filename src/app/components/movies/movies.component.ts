import { Component, computed, effect } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MovieFilterService } from '../../services/movie-filter.service';
import { MatChipsModule } from '@angular/material/chips';
import { ActorsService } from '../../services/actors.service';

@Component({
  selector: 'movies',
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  filteredMovies = computed(() => {
    const filters = this.movieFilterService.filters();
    const search = this.movieFilterService.search();
    const sort = this.movieFilterService.sort();
    return this.movieService.getMovies(search, filters, sort);
  });

  constructor(
    private movieFilterService: MovieFilterService,
    private movieService: MovieService,
    private actorService: ActorsService
  ) {}

  getMovieActorNames(actorIds: number[]) : string[] {
    return this.actorService.getActorsById(actorIds).map(x => x.name);
  }
}
