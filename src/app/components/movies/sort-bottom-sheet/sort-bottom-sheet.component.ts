import { Component, WritableSignal } from '@angular/core';
import { MovieFilterService } from '../../../services/movie-filter.service';
import { SortMovie } from '../../../enums/sortMovie.enum';
import { CommonModule } from '@angular/common';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sort-bottom-sheet',
  imports: [
    CommonModule,
    MatIconModule,
    MatBottomSheetModule,
    MatListModule
  ],
  templateUrl: './sort-bottom-sheet.component.html',
  styleUrls: ['./sort-bottom-sheet.component.scss']
})
export class SortBottomSheetComponent {
  sortMovie = SortMovie;
  actualSort: WritableSignal<SortMovie>;

  constructor(private movieFilterService: MovieFilterService) {
    this.actualSort = movieFilterService.sort;
  }

  sort(sort: SortMovie) {
    this.movieFilterService.setSort(sort);
  }
}
