import { CommonModule } from '@angular/common';
import { Component, computed, effect, Signal, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MovieFilterService } from '../../services/movie-filter.service';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../movies/filter-dialog/filter-dialog.component';
import { SortMovie } from '../../enums/sortMovie.enum';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'toolbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  sortMovie = SortMovie;
  actualSort: SortMovie = SortMovie.Name;

  constructor(
    private dialog: MatDialog,
    public movieFilterService: MovieFilterService
  ) { 
    effect(() => {
      this.actualSort = movieFilterService.sort();
    });
  }

  onSearchChange(value: string) {
    this.movieFilterService.setSearch(value);
  }

  openFilterDialog() {
    this.dialog.open(FilterDialogComponent, {
      data: this.movieFilterService.filters()
    });
  }

  sort(sort: SortMovie) {
    this.movieFilterService.setSort(sort);
  }
}
