import { Component } from '@angular/core';
import { MovieService } from '../../../services/movie.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Movie } from '../../../models/movie.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RatingComponent } from '../rating/rating.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'movie-detail',
  imports: [
    CommonModule,
    RatingComponent,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  movieId: number;
  movie: Movie | undefined;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { 
    this.movieId = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = movieService.getMovieById(this.movieId);
  }

  getSanitizedLink(link: string | undefined) : SafeResourceUrl | string {
    if (!link)
      return "";

    const videoId = new URL(link).searchParams.get('v');

    if (videoId) {
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }

    return "";
  }
}
