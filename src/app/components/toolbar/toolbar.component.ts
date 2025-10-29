import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MovieFilterService } from '../../services/movie-filter.service';
import { MatDialog } from '@angular/material/dialog';
import { SortMovie } from '../../enums/sortMovie.enum';
import { MatMenuModule } from '@angular/material/menu';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { SortBottomSheetComponent } from '../movies/sort-bottom-sheet/sort-bottom-sheet.component';
import { FilterBottomSheetComponent } from '../movies/filter-bottom-sheet/filter-bottom-sheet.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'toolbar',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBottomSheetModule,
    RouterModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  sortMovie = SortMovie;

  constructor(
    private bottomSheet: MatBottomSheet,
    public router: Router,
    public movieFilterService: MovieFilterService
  ) { }

  onSearchChange(value: string) {
    this.movieFilterService.setSearch(value);
  }

  openSortBottomSheet() {
    this.bottomSheet.open(SortBottomSheetComponent);
  }

  openFilterBottomSheet() {
    this.bottomSheet.open(FilterBottomSheetComponent, {
      panelClass: 'custom-bottom-sheet'
    });
  }
}
