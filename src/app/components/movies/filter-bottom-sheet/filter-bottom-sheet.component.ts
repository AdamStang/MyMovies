import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Genres } from '../../../enums/genres.enum';
import { Actor } from '../../../models/actor.model';
import { ActorsService } from '../../../services/actors.service';
import { MovieFilterService } from '../../../services/movie-filter.service';

@Component({
  selector: 'filter-bottom-sheet',
  imports: [
    CommonModule,
    MatBottomSheetModule,
    MatCheckboxModule
  ],
  templateUrl: './filter-bottom-sheet.component.html',
  styleUrls: ['./filter-bottom-sheet.component.scss']
})
export class FilterBottomSheetComponent {
  genresEnumValues = Object.values(Genres);
  actors: Actor[] = [];

  constructor(
    public movieFilterService: MovieFilterService,
    private actorService: ActorsService
  ) { 
    this.actors = actorService.getActors();
  }


}
