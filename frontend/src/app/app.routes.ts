import { Routes } from '@angular/router';
import { WorksListComponent } from './components/works-list/works-list.component';
export const routes: Routes = [
  { path: 'author/:authorKey/works', component: WorksListComponent },
  // { path: 'test/:id/a', component: TestComponent, title: 'test' },
  { path: '**', redirectTo: 'test', pathMatch: 'full' },
];
