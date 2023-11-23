import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthorDetailComponent } from './author-detail/author-detail.component';
import { AuthorSearchComponent } from './author-search/author-search.component';
import { AuthorWorksComponent } from './author-works/author-works.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AuthorDetailComponent, AuthorSearchComponent, AuthorWorksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test';
}
