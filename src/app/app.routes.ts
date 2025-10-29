import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movies/movie-detail/movie-detail.component';

export const routes: Routes = [
    { 
        path: "home", 
        component: MoviesComponent 
    },
    { 
        path: "movies/:id", 
        component: MovieDetailComponent 
    },
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        redirectTo: '/home' 
    }
];
