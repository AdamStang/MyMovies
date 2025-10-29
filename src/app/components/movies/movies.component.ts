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
import { RatingComponent } from './rating/rating.component';
import { Router } from '@angular/router';

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
    MatChipsModule,
    RatingComponent
  ],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  filteredMovies = computed(() => {
    const favoriteOnly = this.movieFilterService.favoriteOnly();
    const genres = this.movieFilterService.genres();
    const actors = this.movieFilterService.actors();
    const search = this.movieFilterService.search();
    const sort = this.movieFilterService.sort();
    return this.movieService.getMovies(search, favoriteOnly, genres, actors, sort);
  });

  constructor(
    private movieFilterService: MovieFilterService,
    private movieService: MovieService,
    private actorService: ActorsService,
    private router: Router
  ) {}

  getMovieActorNames(actorIds: number[]) : string[] {
    return this.actorService.getActorsById(actorIds).map(x => x.name);
  }

  redirectToMovieDetail(movieId: number) : void {
    this.router.navigate(["movies", movieId]);
  }
}
