import { CommonModule } from '@angular/common';
import { Component, Inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MovieFilterService } from '../../../services/movie-filter.service';
import { Genres } from '../../../enums/genres.enum';
import { ActorsService } from '../../../services/actors.service';
import { Actor } from '../../../models/actor.model';

interface FilterData {
  genres: string[];
  actors: string[];
  favorite: boolean;
}

@Component({
  selector: 'filter-dialog',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './filter-dialog.component.html',
  styleUrls: ['./filter-dialog.component.scss']
})
export class FilterDialogComponent {
  favoriteOnly = signal<boolean>(false);
  genres = signal<Genres[]>([]);
  actors = signal<Actor[]>([]);

  genresEnumValues = Object.values(Genres);

  constructor(
    public dialogRef: MatDialogRef<FilterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: FilterData,
    public movieFilterService: MovieFilterService,
    public actorsService: ActorsService
  ) {
    const filters = movieFilterService.filters();
    this.favoriteOnly.set(filters.favoriteOnly);
    this.genres.set(filters.genres);
    this.actors.set(filters.actors);
  }

  toggleGenre(genre: Genres) {
    this.genres.update(genres =>
      genres.includes(genre)
        ? genres.filter(a => a !== genre) 
        : [...genres, genre]              
    );
  }

  toggleActor(actor: Actor) {
    this.actors.update(actors =>
      actors.some(a => a.id == actor.id)
        ? actors.filter(a => a.id !== actor.id) 
        : [...actors, actor]              
    );
  }

  applyFilters() {
    this.movieFilterService.setFilters({
      favoriteOnly: this.favoriteOnly(),
      genres: this.genres(),
      actors: this.actors()
    });

    this.dialogRef.close();
  }

  resetFilters() {
    this.favoriteOnly.set(false);
    this.genres.set([]);
    this.actors.set([]);

    this.movieFilterService.setFilters({
      favoriteOnly: this.favoriteOnly(),
      genres: this.genres(),
      actors: this.actors(),
    });

    this.dialogRef.close();
  }
}
