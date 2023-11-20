import { Routes } from '@angular/router';
import { AuthorSearchComponent } from './author-search/author-search.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'search', component: AuthorSearchComponent },
  { path: 'home', component: HomeComponent },

];
