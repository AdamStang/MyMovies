import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';

export const routes: Routes = [
    { 
        path: "home", 
        component: MoviesComponent 
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
