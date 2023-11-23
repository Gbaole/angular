import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-author-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent {
  name!: string;
  personal_name!: string;
  death_date!: string;
  alternate_names!: string[];
  created!: CreatedTime;
  last_modified!: CreatedTime;
  latest_revision!: number;
  key!: string;
  birth_date!: string;
  revision!: number;
  type!: string;
  remote_ids!: RemoteIDs;
}
export class CreatedTime {
  type!: string;
  value!: Date;
}

export class RemoteIDs {
  viaf!: string;
  wikidata!: string;
  isni!: string;
}
