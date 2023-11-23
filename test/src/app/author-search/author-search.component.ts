import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-author-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-search.component.html',
  styleUrl: './author-search.component.css'
})
export class AuthorSearchComponent {
  numFound: number = 0;
  start: number = 0;
  numFoundExact: number = 0;
  docs: DocAboutAuthor[] = [];

  constructor() {
    // Initialize properties if needed
  }
}

export class DocAboutAuthor {
  key: string = '';
  type: string = '';
  name: string = '';
  alternate_names?: string[] = [];
  birth_date?: string = '';
  death_date?: string = '';
  top_work: string = '';
  work_count: number = 0;
  top_subjects?: string[] = [];
  _version_: number = 0;
}
