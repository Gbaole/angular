import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-author-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-works.component.html',
  styleUrl: './author-works.component.css'
})
export class AuthorWorksComponent {
  links: Links = { self: '', author: '', next: '' };
  size: number = 0; // Size of the result
  entries: WorksEntry[] = []; // Data of works
}

export class Links {
  self: string = ''; // Link to call the API - current page
  author: string = ''; // Link to call the Author page
  next: string = ''; // Link to call the next API page
}

export class WorksEntry {
  type: string = '';
  title: string = '';
  subjects: string[] = []; // Subject categories
  subject_people: string[] = [];
  authors: Author[] = [];
  key: string = '';
  latest_revision: number = 0;
  created: CreatedTime = { type: '', value: new Date() };
  last_modified: CreatedTime = { type: '', value: new Date() };
}
export class CreatedTime {
  type!: string;
  value!: Date;
}

export class Author {
  type: string = '';
  key: string = '';
  author: { key: string; } = { key: '' };
}
