import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'star-rating',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  maxStars = 5;
  rating = input<number>(0);

  normalizedRating = computed(() => {
    const raw = this.rating() / 2;
    return Math.round(raw * 2) / 2; // e.g. 4.35 → 4.5
  });

  stars = computed(() => 
    Array(this.maxStars).fill(0).map((_, i) => i + 1)
  );
}
